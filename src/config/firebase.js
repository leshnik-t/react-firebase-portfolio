import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_apiKey,
  // authDomain: process.env.REACT_APP_FIREBASE_authDomain,
  databaseURL: "https://react-firebase-portfolio-admin-default-rtdb.europe-west1.firebasedatabase.app",
  // projectId: process.env.REACT_APP_FIREBASE_projectId,
  storageBucket: "react-firebase-portfolio-admin.appspot.com",
  // messagingSenderId: process.env.REACT_APP_FIREBASE_messagingSenderId,
  // appId: process.env.REACT_APP_FIREBASE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
