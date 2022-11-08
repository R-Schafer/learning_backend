import { faker } from "https://cdn.skypack.dev/@faker-js/faker";

const auth = firebase.auth();

const whenSignedIn = document.getElementById("whenSignedIn");
const whenSignedOut = document.getElementById("whenSignedOut");
const signInBtn = document.getElementById("signInBtn");
const signOutBtn = document.getElementById("signOutBtn");
const userDetails = document.getElementById("userDetails");

const provider = new firebase.auth.GoogleAuthProvider();

// ------------------------ authentification ------------------------
signInBtn.onclick = () => auth.signInWithPopup(provider);

signOutBtn.onclick = () => auth.signOut();

auth.onAuthStateChanged((user) => {
  if (user) {
    whenSignedIn.hidden = false;
    whenSignedOut.hidden = true;
    userDetails.innerHTML = `<h3>Hello ${user.displayName}!</h3><span>User Id: ${user.uid}</span>`;
  } else {
    whenSignedIn.hidden = true;
    whenSignedOut.hidden = false;
    userDetails.innerHTML = "";
  }
});

// ------------------------ firestore ------------------------
const db = firebase.firestore();

const peopleList = document.getElementById("peopleList");
const addPerson = document.getElementById("addPerson");

let personRef;
let unsubscribe;

auth.onAuthStateChanged((user) => {
  if (user) {
    personRef = db.collection("people");
    addPerson.onclick = () => {
      const { serverTimestamp } = firebase.firestore.FieldValue;

      personRef.add({
        uid: user.uid,
        name: faker.name.firstName(),
        email: faker.internet.email(),
        createdAt: serverTimestamp(),
      });
    };

    unsubscribe = personRef
      .where("uid", "==", user.uid)
      .onSnapshot((querySnapshot) => {
        const people = querySnapshot.docs.map((doc) => {
          return `<li>${doc.data().name}</li>`;
        });
        peopleList.innerHTML = people.join("");
      });
  } else {
    unsubscribe && unsubscribe();
  }
});
