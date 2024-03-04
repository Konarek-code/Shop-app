/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
    getAuth, 
//signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBv2pj1yoipjeTZ7fqKOFIe-A-aMcO8lgU",
  authDomain: "shop-sope.firebaseapp.com",
  projectId: "shop-sope",
  storageBucket: "shop-sope.appspot.com",
  messagingSenderId: "159136443315",
  appId: "1:159136443315:web:d1293a65b123ba988b79c6"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) =>{
  const  userDocRef= doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if(!userSnapshot.exists()) {
    const {displayName, email } = userAuth;
    const createdAt = new Date();
    try {
        await setDoc(userDocRef,{
          displayName,
          email,
          createdAt
        });   
    } catch (error){
      console.log('error creating the user', error.message);
    }
  }
  return userDocRef;
};
