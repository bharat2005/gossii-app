// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth'
import AsyncStorage, {} from '@react-native-async-storage/async-storage'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBWOMNJEUkGwIksedw-_7suqcskZ_ditM",
  authDomain: "gossii-d91c6.firebaseapp.com",
  projectId: "gossii-d91c6",
  storageBucket: "gossii-d91c6.firebasestorage.app",
  messagingSenderId: "1081221594985",
  appId: "1:1081221594985:web:be7da653ea99db249f87f8",
  measurementId: "G-4N12BXLXZ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
    persistence:getReactNativePersistence(AsyncStorage)
})
export const db = getFirestore(app)
export const storage = getStorage(app)