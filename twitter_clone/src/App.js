import "./styles/App.css";
import { createContext, useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { db, auth } from "./components/firebase";
import { doc, getDoc, updateDoc, setDoc } from "firebase/firestore";
import {
  setPersistence,
  browserLocalPersistence,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import UserPage from "./components/UserPage";
import NotFound from "./components/NotFound";

export const LoginContext = createContext(null);

function App() {
  const [currentUser, setCurrentUser] = useState();
  const [currentUserInfo, setCurrentUserInfo] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    getUser();
  }, []);

  // login
  async function login(email, password) {
    await signInWithEmailAndPassword(auth, email, password);
    await getUser();
    navigate("/home");
  }

  // signup
  async function signup(name, username, handle, email, password) {
    await createUserWithEmailAndPassword(auth, email, password);
    await addNewUserToFirestore(name, username, handle, email, password);
    await getUser();
    navigate("/home");
  }

  // add user to firestore
  async function addNewUserToFirestore(
    name,
    username,
    handle,
    email,
    password
  ) {
    try {
      await setDoc(doc(db, "users", email), {
        name: name,
        username: username,
        handle: handle,
        email: email,
        password: password,
        tweets: {},
      });
    } catch (e) {
      const errorMessage = "couldn't add user to firestore";
      alert(errorMessage);
    }
  }

  // get current user info from firebase auth
  async function getUser() {
    await setPersistence(auth, browserLocalPersistence);
    const user = auth.currentUser;
    if (user !== null) {
      const userInfo = await getUserInfo(user.email);
      setCurrentUser(user.email);
      setCurrentUserInfo(userInfo);
    }
  }

  // get current user info from firestore
  async function getUserInfo(currentUser) {
    const docRef = doc(db, "users", currentUser);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      return data;
    } else {
      console.log("No docSnap");
    }
  }

  // add Tweet
  async function addTweet(timeStamp, tweet) {
    const docRef = doc(db, "users", currentUser);
    await updateDoc(docRef, {
      [`tweets.${timeStamp}`]: tweet,
    });
    // refetch user info
    await getUser();
  }

  return (
    <div className="h-100 w-100">
      <LoginContext.Provider
        value={{
          currentUser,
          currentUserInfo,
          login,
          signup,
          addTweet,
        }}
      >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/user/:handle" element={<UserPage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
