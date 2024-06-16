import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAhbhGNEap1U-Zu2hvpcyVhJePwcLuN3kM",
    authDomain: "doctorsdigital-7922c.firebaseapp.com",
    projectId: "doctorsdigital-7922c",
    storageBucket: "doctorsdigital-7922c.appspot.com",
    messagingSenderId: "756253894438",
    appId: "1:756253894438:web:208a304fac481bd1f0c3e7",
    measurementId: "G-WM2G19ZT5M"
};

const app = initializeApp(firebaseConfig);
export const fireBaseDB = getFirestore(app);
