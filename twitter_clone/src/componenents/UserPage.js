import { useState, useEffect } from "react";
import { db } from "./firebase";
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import Loading from "./Loading";
import NotFound from "./NotFound";
import UserPageLeftPanel from "./UserPageLeftPanel";
import UserPageCenterPanel from "./UserPageCenterPanel";
import RightPanel from "./RightPanel";

function UserPage() {
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState();
  const { handle } = useParams();

  useEffect(() => {
    findUser(handle);
  }, []);

  async function findUser(handle) {
    const q = query(collection(db, "users"), where("handle", "==", handle));
    const querySnapshot = await getDocs(q);
    const doc = querySnapshot.docs[0];

    // if user exists
    if (doc) {
      setUserInfo(doc.data());
    }
    setLoading(false);
  }

  if (loading) {
    return <Loading />;
  }
  if (!userInfo) {
    return <NotFound />;
  }

  return (
    <div className="container-lg h-100 d-flex justify-content-center bg-black">
      <div className=" d-flex">
        <section className="d-sm-flex d-none flex-column h-100 flex-shrink-0 py-3 pe-3 border-end border-light border-opacity-25">
          <UserPageLeftPanel />
        </section>
        <section className="w-100 p-10 d-flex ">
          <UserPageCenterPanel userInfo={userInfo} />
        </section>
        <section className="d-lg-flex d-none flex-column flex-shrink-0 p-3 border-start border-light border-opacity-25">
          <RightPanel />
        </section>
      </div>
    </div>
  );
}

export default UserPage;
