import "./styles/App.css";
import { createContext, useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { db, auth } from "./components/firebase";
import {
  doc,
  getDoc,
  updateDoc,
  setDoc,
  deleteDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import {
  setPersistence,
  browserLocalPersistence,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  deleteUser,
} from "firebase/auth";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import UserPage from "./components/userpage/UserPage";
import NotFound from "./components/NotFound";

export const LoginContext = createContext(null);

function App() {
  const [currentUser, setCurrentUser] = useState();
  const [currentUserInfo, setCurrentUserInfo] = useState();
  const [loading, setLoading] = useState(true);

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
    setLoading(true);
    await createUserWithEmailAndPassword(auth, email, password);
    await addNewUserToFirestore(name, username, handle, email, password);
    await getUser();
    navigate("/home");
  }

  // logout
  async function logout() {
    try {
      await signOut(auth);
      setCurrentUser(null);
      setCurrentUserInfo(null);
      navigate("/");
    } catch {
      console.log("could not sign user out");
    }
  }

  // delete user's account
  async function deleteAccount() {
    try {
      await deleteDoc(doc(db, "users", currentUser));
      // delete from firebase auth
      const user = auth.currentUser;
      await deleteUser(user);
      setCurrentUser(null);
      setCurrentUserInfo(null);
      navigate("/");
    } catch {
      console.log("could not delete user");
    }
  }

  // add user to firestore
  async function addNewUserToFirestore(
    name,
    username,
    handle,
    email,
    password
  ) {
    // fetching images
    const imageResponse = await fetch("https://picsum.photos/640/480");
    const bannerResponse = await fetch("https://picsum.photos/640/480");

    try {
      await setDoc(doc(db, "users", email), {
        name: name,
        username: username,
        handle: handle,
        email: email,
        password: password,
        tweets: {},
        image: imageResponse.url,
        banner: bannerResponse.url,
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
    setLoading(false);
  }

  // get current user info from firestore
  async function getUserInfo(currentUser) {
    setLoading(true);
    const docRef = doc(db, "users", currentUser);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      setLoading(false);
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

  // go to a different user's page
  async function getUserPageInfo(handle) {
    const q = query(collection(db, "users"), where("handle", "==", handle));
    const querySnapshot = await getDocs(q);
    const doc = querySnapshot.docs[0];
    if (doc) {
      return doc.data();
    }

    return null;
  }

  return (
    <div className="w-100 d-flex flex-column">
      <LoginContext.Provider
        value={{
          currentUser,
          currentUserInfo,
          loading,
          login,
          signup,
          logout,
          deleteAccount,
          addTweet,
          getUserPageInfo,
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
