/* ==========================================
   TRYO — Cloud Database Layer (db.js)
   Using a free public JSON API for real-time order sync
   across devices. No signup required!
   ========================================== */

// Unique database ID created for Tryo Orders
const API_URL = `/api/orders`;

// Keep track of the current polling interval for live updates
let liveUpdateInterval = null;

// ——— SAVE A SINGLE ORDER ———
function cloudSaveOrder(orderData) {
  // 1. Save locally immediately for snappy UI
  const local = getLocalOrders();
  local.unshift(orderData);
  localStorage.setItem('tryo_orders', JSON.stringify(local));

  // 2. Push to cloud
  fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(orderData)
  })
  .then(() => console.log('[Tryo DB] Order saved to cloud:', orderData.orderId))
  .catch(err => console.error('[Tryo DB] Cloud save failed:', err));
}

// ——— LOAD ALL ORDERS (cloud + merge local) ———
function cloudLoadOrders(callback) {
  fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      const cloudOrders = data.orders || [];
      localStorage.setItem('tryo_orders', JSON.stringify(cloudOrders));
      callback(cloudOrders);
    })
    .catch(err => {
      console.error('[Tryo DB] Cloud load failed, using localStorage:', err);
      callback(getLocalOrders());
    });
}

// ——— UPDATE A SINGLE ORDER FIELD ———
// Called from retailer.js when retailer updates status/tracking
function cloudUpdateOrder(orderId, updatedFields, callback) {
  // Update locally first
  const local = getLocalOrders();
  const idx = local.findIndex(o => o.orderId === orderId);
  if (idx > -1) {
    Object.assign(local[idx], updatedFields);
    localStorage.setItem('tryo_orders', JSON.stringify(local));
  }

  // Update cloud
  fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      const cloudOrders = data.orders || [];
      const cloudIdx = cloudOrders.findIndex(o => o.orderId === orderId);
      
      if (cloudIdx > -1) {
        Object.assign(cloudOrders[cloudIdx], updatedFields);
        
        return fetch(API_URL, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ orders: cloudOrders })
        }).then(() => {
          console.log('[Tryo DB] Order updated in cloud:', orderId);
          if (callback) callback(true);
        });
      } else {
        if (callback) callback(false);
      }
    })
    .catch(err => {
      console.error('[Tryo DB] Cloud update failed:', err);
      if (callback) callback(false);
    });
}

// ——— LISTEN FOR REAL-TIME ORDER UPDATES (POLLING) ———
// Used by retailer portal for live refresh without needing a page reload
function cloudListenOrders(callback) {
  // Do an immediate initial fetch
  cloudLoadOrders(callback);

  // Clear any existing polling
  if (liveUpdateInterval) clearInterval(liveUpdateInterval);

  // Poll every 5 seconds for new updates
  liveUpdateInterval = setInterval(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const cloudOrders = data.orders || [];
        // Only update local and trigger callback if data changed
        const currentLocal = localStorage.getItem('tryo_orders');
        const newCloudStr = JSON.stringify(cloudOrders);
        if (currentLocal !== newCloudStr) {
          localStorage.setItem('tryo_orders', newCloudStr);
          callback(cloudOrders);
        }
      })
      .catch(() => {}); // silent fail on background poll
  }, 5000);
}

// ——— HELPER: get orders from localStorage ———
function getLocalOrders() {
  try {
    return JSON.parse(localStorage.getItem('tryo_orders') || '[]');
  } catch (e) {
    return [];
  }
}
