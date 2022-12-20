import Image from "../images/Image";
import { useNavigate } from "react-router-dom";

function MobileDropdown() {
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
    <div className="dropdown pb-2">
      <div
        className="d-flex align-items-center text-white text-decoration-none"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <Image />
        <div className="dropdown-menu dropdown-menu-dark text-small shadow">
          <button className="dropdown-item" onClick={handleDelete}>
            Delete @handle
          </button>

          <button className="dropdown-item" onClick={handleLogout}>
            Log out @handle
          </button>
        </div>
      </div>
    </div>
  );
}

export default MobileDropdown;
