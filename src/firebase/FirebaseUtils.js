import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDgN-lI4Ri541ABedJ53fhheWT-FP2R3M4",
  authDomain: "smart-clothing-db-1c9b2.firebaseapp.com",
  databaseURL: "https://smart-clothing-db-1c9b2.firebaseio.com",
  projectId: "smart-clothing-db-1c9b2",
  storageBucket: "smart-clothing-db-1c9b2.appspot.com",
  messagingSenderId: "703134342151",
  appId: "1:703134342151:web:02c96440afd303f5e65ea2",
  measurementId: "G-T4W8Q1XV5M",
};

export const creatUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
