import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyCOcq2OBS8VMIPOdkUk9nHGmD9D-9YHx64",
  authDomain: "thanhy-5e852.firebaseapp.com",
  projectId: "thanhy-5e852",
  storageBucket: "thanhy-5e852.firebasestorage.app",
  messagingSenderId: "41642267506",
  appId: "1:41642267506:web:9c5f6bed55f4508ac043eb",
  measurementId: "G-MW0Y0SVW0K" 
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase services
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();