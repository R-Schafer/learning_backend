import LeftPanel from "./LeftPanel";
import CenterPanel from "./CenterPanel";
import RightPanel from "./RightPanel";
import Loading from "./Loading";
import { useState, useEffect } from "react";
import { db, auth } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import { setPersistence, browserLocalPersistence } from "firebase/auth";

function Home() {
  // session for current user
  const [currentUser, setCurrentUser] = useState();
  const [currentUserInfo, setCurrentUserInfo] = useState();

  useEffect(() => {
    (async () => {
      await setPersistence(auth, browserLocalPersistence);
      const user = auth.currentUser;
      if (user !== null) {
        const userInfo = await getUserInfo(user.email);
        setCurrentUser(user.email);
        setCurrentUserInfo(userInfo);
      }
    })();
  }, []);

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

  if (!currentUser || !currentUserInfo) {
    // if (true) {
    return <Loading />;
  }

  return (
    <div className="container-lg h-100 d-flex justify-content-center bg-black">
      <span>{currentUserInfo.username}</span>
      <div className=" d-flex">
        <section className="d-sm-flex d-none flex-column flex-shrink-0 py-3 pe-3 border-end border-light border-opacity-25">
          <LeftPanel
            currentUser={currentUser}
            currentUserInfo={currentUserInfo}
          />
        </section>
        <section className="w-100 p-10 d-flex ">
          <CenterPanel
            currentUser={currentUser}
            currentUserInfo={currentUserInfo}
          />
        </section>
        <section className="d-lg-flex d-none flex-column flex-shrink-0 p-3 border-start border-light border-opacity-25">
          <RightPanel />
        </section>
      </div>
    </div>
  );
}
export default Home;
