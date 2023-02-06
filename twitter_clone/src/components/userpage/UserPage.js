import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading";
import NotFound from "../NotFound";
import LeftPanel from "../LeftPanel";
import UserPageCenterPanel from "./UserPageCenterPanel";
import RightPanel from "../RightPanel";
import { LoginContext } from "../../App";

function UserPage() {
  const { getUserPageInfo, loading } = useContext(LoginContext);
  const [findUserInfo, setFindUserInfo] = useState();
  const { handle } = useParams();

  useEffect(() => {
    findUser(handle);
  }, [handle]);

  // go to another user's page
  async function findUser(handle) {
    const userPage = await getUserPageInfo(handle);
    setFindUserInfo(userPage);
  }

  if (loading) {
    return <Loading type={2} />;
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
