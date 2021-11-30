
import { initializeApp } from "firebase/app";

import 'firebase/storage'

import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA4emW7WPyqwcAStF5yK65k_RlvvzeHm_U",
    authDomain: "olx-clone-bbcf2.firebaseapp.com",
    projectId: "olx-clone-bbcf2",
    storageBucket: "olx-clone-bbcf2.appspot.com",
    messagingSenderId: "287306902304",
    appId: "1:287306902304:web:3ed11404be51eccad18545",
    measurementId: "G-LNLYXV8X8N"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


