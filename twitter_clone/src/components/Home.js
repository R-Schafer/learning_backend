import { useContext } from "react";
import LeftPanel from "./LeftPanel";
import CenterPanel from "./CenterPanel";
import RightPanel from "./RightPanel";
import Loading from "./Loading";
import { LoginContext } from "../App";

function Home() {
  const { currentUser, currentUserInfo } = useContext(LoginContext);

  if (!currentUser || !currentUserInfo) {
    return <Loading />;
  }

  return (
    <div className="d-flex justify-content-center">
      <section className="left-panel d-sm-flex d-none py-3 pe-3">
        <LeftPanel />
      </section>
      <section className="center-section border border-top-0 border-bottom-0 border-light border-opacity-25">
        <CenterPanel />
      </section>
      <section className="right-panel d-lg-flex d-none p-3 ">
        <RightPanel />
      </section>
    </div>
  );
}
export default Home;
