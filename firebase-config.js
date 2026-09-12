/* ==========================================
   TRYO — Firebase Configuration
   
   SETUP INSTRUCTIONS:
   1. Go to https://console.firebase.google.com
   2. Click "Add Project" → name it "tryo-skincare" → Continue
   3. Disable Google Analytics (optional) → Create Project
   4. Click "Build" → "Realtime Database" → "Create Database"
   5. Choose location "us-central1" → Start in TEST MODE → Enable
   6. Go to Project Settings (gear icon) → "Your apps" → click </>  (Web)
   7. Register app with name "tryo-web" → copy the firebaseConfig object
   8. Paste the values below replacing each placeholder
   ========================================== */

const firebaseConfig = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL:       "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID"
};

/* ==========================================
   DO NOT EDIT BELOW THIS LINE
   ========================================== */

// Detect if Firebase is properly configured
const FIREBASE_CONFIGURED = !firebaseConfig.apiKey.includes('YOUR_');
