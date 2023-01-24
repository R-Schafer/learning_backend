import LeftNavbar from "./LeftNavbar";
import LeftDropdown from "./LeftDropdown";

function LeftPanel({ currentUser, currentUserInfo }) {
  return (
    <div className="h-100">
      <div className="h-100 d-flex flex-column justify-content-between">
        <LeftNavbar />
        <LeftDropdown
          currentUser={currentUser}
          currentUserInfo={currentUserInfo}
        />
      </div>
    </div>
  );
}

export default LeftPanel;
