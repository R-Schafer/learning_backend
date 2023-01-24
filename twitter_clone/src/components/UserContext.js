import { createContext, useEffect, useState } from "react";
import { db, auth } from "./firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { setPersistence, browserLocalPersistence } from "firebase/auth";

const UserContext = createContext();

function UserProvider({ children }) {
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

  return (
    <UserContext.Provider
      value={{
        value1: [currentUser, setCurrentUser],
        value2: [currentUserInfo, setCurrentUserInfo],
      }}
      //   currentUserInfo={[currentUserInfo, setCurrentUserInfo]}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
