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
export const auth = firebase.auth();

/* STORE USER DOCUMENT IN FIRESTORE DATABASE*/
const firestore = firebase.firestore();

export const createUserDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userDocumentRef = firestore.doc(`users/${userAuth.uid}`);
  const userDocumentSnapshot = await userDocumentRef.get();

  if (!userDocumentSnapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userDocumentRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userDocumentRef; // in case it might be needed somewhere else
};
