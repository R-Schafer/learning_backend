import { useContext } from "react";
import LeftNavbar from "./LeftNavbar";
import LeftDropdown from "./LeftDropdown";
import { LoginContext } from "../App";
import UserPageLeftPanel from "./userpage/UserPageLeftPanel";

function LeftPanel() {
  const { currentUser } = useContext(LoginContext);
  return (
    <div className="d-flex flex-column justify-content-between">
      {currentUser ? (
        <>
          <LeftNavbar />
          <LeftDropdown />
        </>
      ) : (
        <UserPageLeftPanel />
      )}
    </div>
  );
}

export default LeftPanel;
