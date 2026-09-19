/* ==========================================
   TRYO RETAILER PORTAL — JavaScript Engine
   ========================================== */

const RETAILER_PIN = '1234'; // Change this to your desired PIN
let allOrders = [];
let editingOrderIndex = -1;

// ——— LOGIN ———
function attemptLogin(e) {
  e.preventDefault();
  const pin = document.getElementById('portal-pin').value;
  const errEl = document.getElementById('login-error');

  if (pin === RETAILER_PIN) {
    errEl.classList.add('hidden');
    document.getElementById('login-gate').classList.add('hidden');
    document.getElementById('portal-dashboard').classList.remove('hidden');
    loadPortalData();
    lucide.createIcons();
  } else {
    errEl.classList.remove('hidden');
    document.getElementById('portal-pin').value = '';
    document.getElementById('portal-pin').focus();
  }
}

function portalLogout() {
  document.getElementById('portal-dashboard').classList.add('hidden');
  document.getElementById('login-gate').classList.remove('hidden');
  document.getElementById('portal-pin').value = '';
}

// ——— LOAD DATA — REAL-TIME FROM CLOUD DB ———
function loadPortalData() {
  // Show a loading indicator
  document.getElementById('orders-container').innerHTML = `
    <div class="empty-orders">
      <div style="font-size:36px;">⏳</div>
      <h3>Loading Orders...</h3>
      <p>Fetching live orders from cloud database.</p>
    </div>
  `;

  // Use real-time listener if Firebase is ready, otherwise local
  if (typeof cloudListenOrders === 'function') {
    cloudListenOrders(orders => {
      allOrders = orders;
      updateStats();
      renderOrders();
    });
  } else {
    // Fallback to localStorage
    try {
      allOrders = JSON.parse(localStorage.getItem('tryo_orders') || '[]');
    } catch (e) { allOrders = []; }
    updateStats();
    renderOrders();
  }
}

// ——— SAVE BACK TO LOCALSTORAGE ———
function saveOrders() {
  localStorage.setItem('tryo_orders', JSON.stringify(allOrders));
}

// ——— STATS ———
function updateStats() {
  const total = allOrders.length;
  const pending = allOrders.filter(o =>
    (o.status || '').toLowerCase().includes('pending') ||
    (o.status || '').toLowerCase().includes('cod')
  ).length;
  const shipped = allOrders.filter(o =>
    ['Shipped', 'Out for Delivery', 'Processing'].includes(o.status)
  ).length;
  const delivered = allOrders.filter(o => o.status === 'Delivered').length;
  const revenue = allOrders.reduce((sum, o) => sum + (Number(o.total) || 0), 0);

  document.getElementById('stat-total').innerText = total;
  document.getElementById('stat-pending').innerText = pending;
  document.getElementById('stat-shipped').innerText = shipped;
  document.getElementById('stat-delivered').innerText = delivered;
  document.getElementById('stat-revenue').innerText = `₹${revenue.toLocaleString('en-IN')}`;
}

// ——— RENDER ORDERS ———
function renderOrders() {
  const container = document.getElementById('orders-container');
  container.innerHTML = '';

  const statusFilter  = document.getElementById('filter-status').value;
  const paymentFilter = document.getElementById('filter-payment').value;

  let filtered = allOrders.filter(order => {
    const matchStatus  = statusFilter  === 'all' || (order.status || '').includes(statusFilter);
    const matchPayment = paymentFilter === 'all' || (order.paymentMethod || '').includes(paymentFilter);
    return matchStatus && matchPayment;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-orders">
        <div style="font-size:48px;">📦</div>
        <h3>No Orders Found</h3>
        <p>No orders match the current filters. Try changing the filter or check back after customers place orders from the store.</p>
      </div>
    `;
    return;
  }

  filtered.forEach((order, idx) => {
    // Find real index in allOrders
    const realIdx = allOrders.indexOf(order);
    const card = document.createElement('div');
    card.className = 'order-card';

    const statusBadge = getStatusBadge(order.status || 'Paid');

    const itemsHtml = (order.items || []).map(item => `
      <div class="order-item-pill">
        <strong>${item.name}</strong>
        <span>${item.quantity}x &nbsp;·&nbsp; ${item.size === 'mini' ? 'Mini Trial' : 'Full Size'} &nbsp;·&nbsp; ₹${item.price * item.quantity}</span>
      </div>
    `).join('');

    const trackingHtml = order.trackingLocation ? `
      <div class="order-tracking-info">
        <strong>📍 ${order.trackingLocation}</strong>
        ${order.courier ? `<span>📦 ${order.courier} &nbsp;|&nbsp; AWB: ${order.trackingId || '—'}</span>` : ''}
        ${order.deliveryDate ? `<span>🗓 Est. Delivery: ${order.deliveryDate}</span>` : ''}
      </div>
    ` : `<div class="order-tracking-info" style="color:var(--text-muted)">No tracking info yet</div>`;

    const noteHtml = order.retailerNote ? `
      <div class="retailer-note-pill">💬 Note: ${order.retailerNote}</div>
    ` : '';

    card.innerHTML = `
      <div class="order-card-header">
        <div class="order-id-block">
          <span class="order-id">#${order.orderId}</span>
          <div class="order-meta">
            <span>📅 ${order.date}</span>
            <span>${order.paymentMethod || '💳 Card'}</span>
          </div>
        </div>
        ${statusBadge}
      </div>

      <div class="order-items-grid">
        ${itemsHtml}
      </div>

      ${noteHtml}

      <div class="order-card-footer">
        ${trackingHtml}
        <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">
          <div class="order-total-block">₹${(order.total || 0).toLocaleString('en-IN')}</div>
          <button class="btn-edit-order" onclick="openEditModal(${realIdx})">
            <i data-lucide="edit-3"></i> Update Order
          </button>
        </div>
      </div>
    `;

    container.appendChild(card);
  });

  lucide.createIcons();
}

function getStatusBadge(status) {
  const map = {
    'Paid':              { cls: 'badge-paid',       icon: '✅' },
    'Pending (COD)':     { cls: 'badge-pending',    icon: '⏳' },
    'Processing':        { cls: 'badge-processing', icon: '📦' },
    'Shipped':           { cls: 'badge-shipped',    icon: '🚚' },
    'Out for Delivery':  { cls: 'badge-delivery',   icon: '🛵' },
    'Delivered':         { cls: 'badge-delivered',  icon: '✔' },
    'Cancelled':         { cls: 'badge-cancelled',  icon: '❌' },
  };

  const found = Object.entries(map).find(([key]) => (status || '').includes(key));
  if (found) {
    const [label, { cls, icon }] = found;
    return `<span class="status-badge ${cls}">${icon} ${status}</span>`;
  }
  return `<span class="status-badge badge-paid">${status}</span>`;
}

// ——— OPEN EDIT MODAL ———
function openEditModal(idx) {
  editingOrderIndex = idx;
  const order = allOrders[idx];

  document.getElementById('edit-order-id-label').innerText = `#${order.orderId}`;
  document.getElementById('edit-status').value = order.status || 'Paid';
  document.getElementById('edit-delivery-date').value = order.deliveryDate || '';
  document.getElementById('edit-location').value = order.trackingLocation || '';
  document.getElementById('edit-courier').value = order.courier || '';
  document.getElementById('edit-tracking-id').value = order.trackingId || '';
  document.getElementById('edit-note').value = order.retailerNote || '';

  document.getElementById('edit-order-modal').classList.remove('hidden');
  lucide.createIcons();
}

function closeEditModal() {
  document.getElementById('edit-order-modal').classList.add('hidden');
  editingOrderIndex = -1;
}

// ——— SAVE EDIT ———
function saveOrderEdit() {
  if (editingOrderIndex < 0) return;

  const order = allOrders[editingOrderIndex];

  const updatedFields = {
    status:           document.getElementById('edit-status').value,
    deliveryDate:     document.getElementById('edit-delivery-date').value,
    trackingLocation: document.getElementById('edit-location').value.trim(),
    courier:          document.getElementById('edit-courier').value.trim(),
    trackingId:       document.getElementById('edit-tracking-id').value.trim(),
    retailerNote:     document.getElementById('edit-note').value.trim(),
    lastUpdated:      new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })
  };

  // Apply locally
  Object.assign(order, updatedFields);

  // Push to cloud (Firebase) + local fallback
  if (typeof cloudUpdateOrder === 'function') {
    cloudUpdateOrder(order.orderId, updatedFields, (success) => {
      showToast(success
        ? `Order #${order.orderId} updated in cloud! ✅`
        : `Order #${order.orderId} updated locally (Firebase not configured)`
      );
    });
  } else {
    saveOrders();
    showToast(`Order #${order.orderId} updated successfully!`);
  }

  // Trigger Email Alert
  sendRetailerEmail(order, 'alert');

  closeEditModal();
  updateStats();
  renderOrders();
}

// Function to send Order Status Alert using EmailJS
function sendRetailerEmail(orderData, type) {
  const emailParams = {
    to_email: orderData.customerEmail,
    to_name: orderData.customerName,
    order_id: orderData.orderId,
    order_total: orderData.total,
    order_status: orderData.status,
    message: `Your order status has been updated to: ${orderData.status}.`
  };

  if (typeof emailjs !== 'undefined' && emailjs._publicKey) {
    emailjs.send("service_d5w4qrw", "template_5n9hbcw", emailParams)
      .then(() => {
        setTimeout(() => showToast(`📧 Status update email sent to ${orderData.customerEmail}`), 1000);
      })
      .catch(err => {
        console.error("EmailJS Error:", err);
        setTimeout(() => showToast(`📧 [Simulated Email] Sent to ${orderData.customerEmail}`), 1000);
      });
  } else {
    setTimeout(() => {
      showToast(`📧 [Simulated Email] Sent to ${orderData.customerEmail}`);
    }, 1500);
  }
}

// ——— TOAST ———
function showToast(msg) {
  const old = document.getElementById('portal-toast');
  if (old) old.remove();

  const toast = document.createElement('div');
  toast.id = 'portal-toast';
  toast.innerText = `✓  ${msg}`;
  toast.style.cssText = `
    position: fixed;
    bottom: 28px; right: 28px;
    background: #b07077; color: #fff;
    padding: 12px 22px;
    border-radius: 50px;
    font-size: 13px; font-weight: 700;
    box-shadow: 0 4px 20px rgba(176,112,119,0.35);
    z-index: 999999; opacity: 0;
    transition: opacity 0.3s ease;
    font-family: 'Montserrat', sans-serif;
  `;
  document.body.appendChild(toast);
  requestAnimationFrame(() => requestAnimationFrame(() => toast.style.opacity = '1'));
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 400);
  }, 2800);
}

// ——— CLOSE MODAL ON BACKDROP CLICK ———
document.addEventListener('click', (e) => {
  if (e.target.id === 'edit-order-modal') {
    closeEditModal();
  }
});

// ——— INIT ———
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
});
