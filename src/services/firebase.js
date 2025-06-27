// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth'
import AsyncStorage, {} from '@react-native-async-storage/async-storage'
import Constants from 'expo-constants'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: Constants.expoConfig.extra.API_KEY,
  authDomain: Constants.expoConfig.extra.AUTH_DOMAIN,
  projectId: Constants.expoConfig.extra.PROJECT_ID,
  storageBucket: Constants.expoConfig.extra.STORAGE_BUCKET,
  messagingSenderId: Constants.expoConfig.extra.MESSAGING_SENDER_ID,
  appId: Constants.expoConfig.extra.APP_ID,
  measurementId:  Constants.expoConfig.extra.MEASURMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
    persistence:getReactNativePersistence(AsyncStorage)
})
export const db = getFirestore(app)
export const storage = getStorage(app)