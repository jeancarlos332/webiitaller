import firebase from "firebase";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDO5EGMm5z-9YKs9IVMKzM2B07OgcoCSLM",
  authDomain: "reactii-7fdd5.firebaseapp.com",
  projectId: "reactii-7fdd5",
  storageBucket: "reactii-7fdd5.appspot.com",
  messagingSenderId: "617368847710",
  appId: "1:617368847710:web:71a82754770af93f4b3bcf"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export {firebase}