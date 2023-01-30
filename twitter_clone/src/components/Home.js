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
    <div className="pages w-100 h-100 d-flex bg-black">
      <div className="pages-container w-100 d-flex">
        <section className="d-sm-flex d-none flex-column h-100 flex-shrink-0 py-3 pe-3 border-end border-light border-opacity-25">
          <LeftPanel />
        </section>
        <section className="center-section w-100">
          <CenterPanel />
        </section>
        <section className="d-lg-flex d-none flex-column flex-shrink-0 p-3 border-start border-light border-opacity-25">
          <RightPanel />
        </section>
      </div>
    </div>
  );
}
export default Home;
