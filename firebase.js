// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider,getAuth,signInWithPopup} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDD1m1Q8zSd0D1uNjmzZMZR0_J1kHif9zo",
  authDomain: "green-shop-81f64.firebaseapp.com",
  projectId: "green-shop-81f64",
  storageBucket: "green-shop-81f64.firebasestorage.app",
  messagingSenderId: "268292528817",
  appId: "1:268292528817:web:82208d54d3343b78a4a090",
  measurementId: "G-GNWB8WYL86"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};

export { signInWithGoogle };
