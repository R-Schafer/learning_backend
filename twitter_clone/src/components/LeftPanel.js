import { useContext } from "react";
import LeftNavbar from "./LeftNavbar";
import LeftDropdown from "./LeftDropdown";
import { LoginContext } from "../App";
import UserPageLeftPanel from "./userpage/UserPageLeftPanel";

function LeftPanel() {
  const { currentUser } = useContext(LoginContext);
  return (
    <div className="h-100">
      <div className="h-100 d-flex flex-column justify-content-between">
        {currentUser ? (
          <>
            <LeftNavbar />
            <LeftDropdown />
          </>
        ) : (
          <UserPageLeftPanel />
        )}
      </div>
    </div>
  );
}

export default LeftPanel;
