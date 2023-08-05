import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyC8N3orVO0USNSDJ5V4KjlD1b8ulFKwpfs",
    authDomain: "whatsapp-clone-4859d.firebaseapp.com",
    projectId: "whatsapp-clone-4859d",
    storageBucket: "whatsapp-clone-4859d.appspot.com",
    messagingSenderId: "740856411188",
    appId: "1:740856411188:web:a1a63bc4caa3312ced4661",
    measurementId: "G-H48WN11EDT"
  };

  const app = initializeApp(firebaseConfig);
  export const firebaseAuth = getAuth(app);