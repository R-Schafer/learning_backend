// import { faker } from "https://cdn.skypack.dev/@faker-js/faker";

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

//   configuration
const firebaseConfig = {
  apiKey: "AIzaSyDL1tmHsJeYzGM6DkNoQPeJKrlArBJNvu8",
  authDomain: "twitter-clone-8163e.firebaseapp.com",
  projectId: "twitter-clone-8163e",
  storageBucket: "twitter-clone-8163e.appspot.com",
  messagingSenderId: "529264716482",
  appId: "1:529264716482:web:2a3094ae5aac630b67e95b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Firestore
export const db = getFirestore(app);
