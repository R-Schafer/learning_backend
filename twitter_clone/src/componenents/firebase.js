// import { faker } from "https://cdn.skypack.dev/@faker-js/faker";

import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { getAuth } from "firebase/auth";

//   configuration
const firebaseConfig = {
  apiKey: "AIzaSyDL1tmHsJeYzGM6DkNoQPeJKrlArBJNvu8",
  authDomain: "twitter-clone-8163e.firebaseapp.com",
  projectId: "twitter-clone-8163e",
  storageBucket: "twitter-clone-8163e.appspot.com",
  messagingSenderId: "529264716482",
  appId: "1:529264716482:web:2a3094ae5aac630b67e95b",
};

// initialize firebase
const app = initializeApp(firebaseConfig);

// initialize firebase authentication
export const auth = getAuth(app);

// initialize firestore
export const db = getFirestore(app);

// collection ref
export const colRef = collection(db, "users");
