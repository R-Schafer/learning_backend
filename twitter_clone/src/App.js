import "./styles/App.css";
import { createContext, useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { db, auth } from "./components/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { setPersistence, browserLocalPersistence } from "firebase/auth";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import UserPage from "./components/UserPage";
import NotFound from "./components/NotFound";

export const LoginContext = createContext(null);

function App() {
  const [currentUser, setCurrentUser] = useState();
  const [currentUserInfo, setCurrentUserInfo] = useState();

  useEffect(() => {
    getUser();
  }, []);

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
          setCurrentUser,
          currentUserInfo,
          setCurrentUserInfo,
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
