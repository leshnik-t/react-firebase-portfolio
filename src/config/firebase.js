import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: "https://react-firebase-portfolio-admin-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-firebase-portfolio-admin",
  storageBucket: "react-firebase-portfolio-admin.appspot.com",
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const auth = getAuth();
const databaseURL = firebaseConfig.databaseURL;

export { auth, storage, databaseURL };

