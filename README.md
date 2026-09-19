# Tryo Organic Beauty 🌱

An eco-friendly skincare e-commerce platform prototype featuring a modern customer-facing storefront and a real-time retailer management portal.

## 🚀 Live Demo
**Vercel URL:** [https://tryo-organic-beauty.vercel.app](https://tryo-organic-beauty.vercel.app)

---

## ✨ Features

### 👤 Customer Storefront (`index.html`)
- **AI Face & Hair Scanner:** Simulates an AI analysis of the user's skin/hair and recommends personalized products.
- **Dynamic Shopping Cart:** Full cart functionality with price calculation.
- **Razorpay Integration:** Live test-mode payment gateway for processing Card payments securely.
- **Custom UPI Flow:** A simulated manual UPI QR code payment flow with realistic delays.
- **Automated Emails:** Integrates with EmailJS to instantly email the customer a receipt upon successful checkout.
- **Purchase History:** Users can log in to view their past orders.

### 🏢 Retailer Portal (`retailer.html`)
- **Live Order Dashboard:** Fetches orders from the cloud database in real-time.
- **Order Management:** Retailers can update the status of any order (e.g., Pending -> Shipped).
- **Automated Alerts:** When a retailer updates an order's status, the system automatically emails the customer with the new status (via EmailJS).

---

## 🛠️ Tech Stack & Architecture

- **Frontend:** Vanilla HTML5, CSS3, JavaScript (No frameworks).
- **Database:** Firebase Realtime Database (Connected via lightweight REST API).
- **Payments:** Razorpay Checkout API.
- **Emails:** EmailJS SDK v4.
- **Hosting / Serverless:** Vercel & Vercel Serverless Functions.

---

## 🔑 Configuration & Setup

If you are cloning this repository, you must insert your own API keys for the third-party services to function.

### 1. Firebase (Database)
The app uses a Firebase Realtime Database to store and sync orders between the customer app and the retailer portal.
- Open `db.js`.
- Replace the `FIREBASE_PROJECT_ID` variable with your own Firebase Project ID.
- Ensure your Realtime Database Rules are set to `true` for read/write during testing.

### 2. Razorpay (Payments)
- Open `app.js`.
- Locate the `Razorpay` options block (around line 1315).
- Replace `rzp_test_Tdz3T845NCiob7` with your own Razorpay Test API Key.

### 3. EmailJS (Automated Emails)
- Open `index.html` and `retailer.html`.
- Locate `emailjs.init({ publicKey: "YOUR_PUBLIC_KEY" })` at the bottom of the files and insert your public key.
- Open `app.js` and `retailer.js`.
- Locate the `emailjs.send("SERVICE_ID", "TEMPLATE_ID", ...)` calls and insert your corresponding EmailJS IDs.
- Ensure your EmailJS template contains the variables `{{name}}`, `{{email}}`, `{{title}}`, `{{time}}`, and `{{message}}`. **Crucially, set the "To Email" field in your template to `{{email}}` so it sends to the customer.**
