import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { db, auth } from "./firebase/firebase-config";
import {
  collection,
  // addDoc,
  // getDoc,
  getDocs,
  // query,
  // where,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
// import {
//   GoogleAuthProvider,
//   signInWithPopup,
//   signOut,
//   onAuthStateChanged,
// } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

import Login from "./componenents/Login";
import Register from "./componenents/Register";
import Home from "./componenents/Home";

function App() {
  // const [users, setUsers] = useState([]);
  // const usersRef = collection(db, "users");
  // useEffect(() => {
  //   const getUsers = async () => {
  //     const data = await getDocs(usersRef);
  //     setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };
  //   getUsers();
  // }, []);

  return (
    <div className="h-100 w-100">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
