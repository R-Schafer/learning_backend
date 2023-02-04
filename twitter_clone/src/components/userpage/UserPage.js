import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading";
import NotFound from "../NotFound";
import LeftPanel from "../LeftPanel";
import UserPageCenterPanel from "./UserPageCenterPanel";
import RightPanel from "../RightPanel";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function UserPage() {
  const [loading, setLoading] = useState(true);
  const [findUserInfo, setFindUserInfo] = useState();
  const { handle } = useParams();

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
    <div className="d-flex justify-content-center">
      <section className="left-panel d-sm-flex d-none py-3 pe-3">
        <LeftPanel />
      </section>
      <section className="center-section w-100 border border-top-0 border-bottom-0 border-light border-opacity-25">
        <UserPageCenterPanel findUserInfo={findUserInfo} />
      </section>
      <section className="right-panel d-lg-flex d-none p-3">
        <RightPanel />
      </section>
    </div>
  );
}

export default UserPage;
