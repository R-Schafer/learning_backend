import Image from "./images/Image";
import { useContext } from "react";
import { LoginContext } from "../App";

function LeftDropdown() {
  const { currentUserInfo, logout, deleteAcct } = useContext(LoginContext);

  return (
    <div className="dropdown ps-3">
      <div
        className="d-flex align-items-center text-white text-decoration-none"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <Image />
        <h6 className="mb-0 d-none d-lg-flex flex-column">
          <strong>{currentUserInfo.username}</strong>
          <span className="opacity-50">
            <small>@{currentUserInfo.handle}</small>
          </span>
        </h6>
      </div>

      <div className="dropdown-menu dropdown-menu-dark text-small shadow">
        <button className="dropdown-item" onClick={deleteAcct}>
          Delete @{currentUserInfo.handle}
        </button>

        <button className="dropdown-item" onClick={logout}>
          Log out @{currentUserInfo.handle}
        </button>
      </div>
    </div>
  );
}

export default LeftDropdown;
