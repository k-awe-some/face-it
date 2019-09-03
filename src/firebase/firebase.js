import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

/* INITIALIZE FIREBASE */
const firebaseConfig = {
  apiKey: "AIzaSyB9fStoa96w7rv9kpzFQ0lSwXDvNMJSznI",
  authDomain: "face-it-app.firebaseapp.com",
  databaseURL: "https://face-it-app.firebaseio.com",
  projectId: "face-it-app",
  storageBucket: "face-it-app.appspot.com",
  messagingSenderId: "94106703801",
  appId: "1:94106703801:web:8c8d4a569af9c3ad"
};

firebase.initializeApp(firebaseConfig);

/* INITIALIZE FIRESTORE AUTHENTICATION */
const firestore = firebase.firestore();
export const auth = firebase.auth();
