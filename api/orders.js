// In-memory data store for Vercel Serverless Function
// Note: This data will reset when the serverless function goes to sleep (cold start),
// but it stays warm for 15-60 mins, which is perfect for cross-device prototype testing!

let globalOrders = [];

export default function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'GET') {
    res.status(200).json({ success: true, orders: globalOrders });
  } 
  else if (req.method === 'POST') {
    const newOrder = req.body;
    if (newOrder) {
      // Add to front of array
      globalOrders.unshift(newOrder);
      res.status(200).json({ success: true, orders: globalOrders });
    } else {
      res.status(400).json({ error: 'Missing order data' });
    }
  }
  else if (req.method === 'PUT') {
    const updatedOrders = req.body.orders;
    if (Array.isArray(updatedOrders)) {
      globalOrders = updatedOrders;
      res.status(200).json({ success: true, orders: globalOrders });
    } else {
      res.status(400).json({ error: 'Invalid orders array' });
    }
  }
  else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
