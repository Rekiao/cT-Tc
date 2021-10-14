// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDVJ1uY3V88l2u1X2YMNZ2SB0dYk5lS-hE",
  authDomain: "ct-tc-6bef1.firebaseapp.com",
  projectId: "ct-tc-6bef1",
  storageBucket: "ct-tc-6bef1.appspot.com",
  messagingSenderId: "631314752487",
  appId: "1:631314752487:web:ef473b76863365de725342",
  measurementId: "G-NJFJ1TQG3Q"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
export const storage = firebaseApp.storage();
