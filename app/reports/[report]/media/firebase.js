// src/firebase.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDtzn_7bMsc5c9H92zfGXmnWzR5FYFqVdw",
    authDomain: "operations-2bf2f.firebaseapp.com",
    projectId: "operations-2bf2f",
    storageBucket: "operations-2bf2f.appspot.com",
    messagingSenderId: "649146000456",
    appId: "1:649146000456:web:0935d4e3b560320e95647d"
  };

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
