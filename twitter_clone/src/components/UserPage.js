import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import NotFound from "./NotFound";
import LeftPanel from "./LeftPanel";
import UserPageLeftPanel from "./UserPageLeftPanel";
import UserPageCenterPanel from "./UserPageCenterPanel";
import RightPanel from "./RightPanel";
import { LoginContext } from "../App";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./firebase";

function UserPage() {
  const [loading, setLoading] = useState(true);
  const [findUserInfo, setFindUserInfo] = useState();
  const { handle } = useParams();
  const { currentUser } = useContext(LoginContext);

  useEffect(() => {
    findUser(handle);
  }, [handle]);

  // finding user by url
  async function findUser(handle) {
    const q = query(collection(db, "users"), where("handle", "==", handle));
    const querySnapshot = await getDocs(q);
    const doc = querySnapshot.docs[0];

    // if user exists
    if (doc) {
      setFindUserInfo(doc.data());
    }
    setLoading(false);
  }

  if (loading) {
    return <Loading />;
  }

  if (!findUserInfo) {
    return <NotFound />;
  }

  return (
    <div className="container-lg h-100 d-flex justify-content-center bg-black">
      <div className=" d-flex">
        <section className="d-sm-flex d-none flex-column h-100 flex-shrink-0 py-3 pe-3 border-end border-light border-opacity-25">
          {currentUser ? <LeftPanel /> : <UserPageLeftPanel />}
        </section>
        <section className="w-100 p-10 d-flex ">
          <UserPageCenterPanel findUserInfo={findUserInfo} />
        </section>
        <section className="d-lg-flex d-none flex-column flex-shrink-0 p-3 border-start border-light border-opacity-25">
          <RightPanel />
        </section>
      </div>
    </div>
  );
}

export default UserPage;
