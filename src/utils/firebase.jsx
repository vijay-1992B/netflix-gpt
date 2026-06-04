// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVP0DxHt9m8iaBm8bsFU9g9cxV8pfNK0o",
  authDomain: "netflix-gpt92.firebaseapp.com",
  projectId: "netflix-gpt92",
  storageBucket: "netflix-gpt92.firebasestorage.app",
  messagingSenderId: "466809700486",
  appId: "1:466809700486:web:bb02eda9ff293931191107",
  measurementId: "G-FWZERE9Y6W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();