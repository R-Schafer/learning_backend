import Image from "./images/Image";
import { useContext } from "react";
import { LoginContext } from "../App";

function MobileDropdown() {
  const { currentUserInfo, logout, deleteAcct } = useContext(LoginContext);

  return (
    <div className="dropdown pb-2">
      <div
        className="d-flex align-items-center text-white text-decoration-none"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <Image />
        <div className="dropdown-menu dropdown-menu-dark text-small shadow">
          <button className="dropdown-item" onClick={deleteAcct}>
            Delete @{currentUserInfo.handle}
          </button>

          <button className="dropdown-item" onClick={logout}>
            Log out @{currentUserInfo.handle}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MobileDropdown;
