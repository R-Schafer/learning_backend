import Image from "../images/Image";
import { Link } from "react-router-dom";

function LeftDropdown() {
  return (
    <div className="dropdown ps-3">
      <Link
        to=""
        className="d-flex align-items-center text-white text-decoration-none"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <Image />
        <h6 className="mb-0 d-none d-lg-flex flex-column">
          <strong>Username</strong>
          <span className="opacity-50">
            <small>@handle</small>
          </span>
        </h6>
      </Link>
      <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
        <li>
          <Link to="" className="dropdown-item">
            <button type="button" className="delete-btn">
              Delete @username
            </button>
          </Link>
        </li>
        <li>
          <Link to="" className="dropdown-item">
            <button type="button" className="logout-btn">
              Logout @username
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default LeftDropdown;
