import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyARLl_4nxi3BX_Aur1fxyV09VK8cpVq1fc",
    authDomain: "ccauth-test.firebaseapp.com",
    projectId: "ccauth-test",
    storageBucket: "ccauth-test.firebasestorage.app",
    messagingSenderId: "782938992224",
    appId: "1:782938992224:web:fe0d790dde82d3b9c11d05"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

