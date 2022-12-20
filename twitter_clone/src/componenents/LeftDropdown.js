import Image from "../images/Image";
import { useNavigate } from "react-router-dom";

function LeftDropdown() {
  const navigate = useNavigate();

  function handleDelete() {
    console.log("deleted");
    navigate("/");
  }

  function handleLogout() {
    console.log("logged out");
    navigate("/");
  }

  return (
    <div className="dropdown ps-3">
      <div
        className="d-flex align-items-center text-white text-decoration-none"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <Image />
        <h6 className="mb-0 d-none d-lg-flex flex-column">
          <strong>usename</strong>
          <span className="opacity-50">
            <small>@handle</small>
          </span>
        </h6>
      </div>

      <div className="dropdown-menu dropdown-menu-dark text-small shadow">
        <button className="dropdown-item" onClick={handleDelete}>
          Delete @handle
        </button>

        <button className="dropdown-item" onClick={handleLogout}>
          Log out @handle
        </button>
      </div>
    </div>
  );
}

export default LeftDropdown;
