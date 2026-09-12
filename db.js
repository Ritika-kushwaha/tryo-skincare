/* ==========================================
   TRYO — Cloud Database Layer (db.js)
   Works with Firebase Realtime Database.
   Falls back to localStorage only if Firebase
   is not yet configured.
   ========================================== */

let firebaseApp  = null;
let firebaseDB   = null;
let dbReady      = false;

// Initialize Firebase if configured
function initDB() {
  if (!FIREBASE_CONFIGURED) {
    console.warn('[Tryo DB] Firebase not configured — using localStorage only (single device mode).');
    dbReady = false;
    return;
  }

  try {
    firebaseApp = firebase.initializeApp(firebaseConfig);
    firebaseDB  = firebase.database();
    dbReady     = true;
    console.log('[Tryo DB] Firebase Realtime Database connected ✅');
  } catch (e) {
    console.error('[Tryo DB] Firebase init failed:', e);
    dbReady = false;
  }
}

// ——— SAVE A SINGLE ORDER ———
// Called from app.js after checkout
function cloudSaveOrder(orderData) {
  // Always save locally
  const local = getLocalOrders();
  local.unshift(orderData);
  localStorage.setItem('tryo_orders', JSON.stringify(local));

  // Save to Firebase if ready
  if (dbReady && firebaseDB) {
    const ref = firebaseDB.ref('orders/' + orderData.orderId);
    ref.set(orderData)
      .then(() => console.log('[Tryo DB] Order saved to cloud:', orderData.orderId))
      .catch(err => console.error('[Tryo DB] Cloud save failed:', err));
  }
}

// ——— LOAD ALL ORDERS (cloud + merge local) ———
// callback(ordersArray) is called with the result
function cloudLoadOrders(callback) {
  if (!dbReady || !firebaseDB) {
    // Offline mode — return localStorage orders
    callback(getLocalOrders());
    return;
  }

  firebaseDB.ref('orders').orderByChild('date').once('value')
    .then(snapshot => {
      const data = snapshot.val();
      if (!data) {
        callback([]);
        return;
      }
      // Firebase returns an object keyed by orderId — convert to array, newest first
      const orders = Object.values(data).reverse();
      // Merge into localStorage for offline cache
      localStorage.setItem('tryo_orders', JSON.stringify(orders));
      callback(orders);
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

  if (dbReady && firebaseDB) {
    firebaseDB.ref('orders/' + orderId).update(updatedFields)
      .then(() => {
        console.log('[Tryo DB] Order updated in cloud:', orderId);
        if (callback) callback(true);
      })
      .catch(err => {
        console.error('[Tryo DB] Cloud update failed:', err);
        if (callback) callback(false);
      });
  } else {
    if (callback) callback(false);
  }
}

// ——— LISTEN FOR REAL-TIME ORDER UPDATES ———
// Used by retailer portal for live refresh
function cloudListenOrders(callback) {
  if (!dbReady || !firebaseDB) {
    callback(getLocalOrders());
    return;
  }

  firebaseDB.ref('orders').on('value', snapshot => {
    const data = snapshot.val();
    const orders = data ? Object.values(data).reverse() : [];
    localStorage.setItem('tryo_orders', JSON.stringify(orders));
    callback(orders);
  });
}

// ——— HELPER: get orders from localStorage ———
function getLocalOrders() {
  try {
    return JSON.parse(localStorage.getItem('tryo_orders') || '[]');
  } catch (e) {
    return [];
  }
}
