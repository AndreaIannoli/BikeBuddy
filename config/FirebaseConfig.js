// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import {getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBaANnsycufO7_mf97ZuPQ9KJk67aqHl4g",
    authDomain: "bikebuddy-55ef5.firebaseapp.com",
    projectId: "bikebuddy-55ef5",
    storageBucket: "bikebuddy-55ef5.appspot.com",
    messagingSenderId: "510171460255",
    appId: "1:510171460255:web:d38ebff3596c8812b1e8aa"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
initializeAuth(FIREBASE_APP, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})
export const FIREBASE_ANALYTICS = getAnalytics(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);

export const FIREBASE_DB = getStorage(FIREBASE_APP);

export const FIREBASE_FIRESTORE = getFirestore(FIREBASE_APP);
