import Image from "../images/Image";
import { Link } from "react-router-dom";

function MobileDropdown() {
  return (
    <div className="dropdown pb-3">
      <Link
        to=""
        className="d-flex align-items-center text-white text-decoration-none "
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <Image />
      </Link>
      <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
        <li>
          <Link to="" className="dropdown-item">
            Delete @username
          </Link>
        </li>
        <li>
          <Link to="" className="dropdown-item">
            Log out @username
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default MobileDropdown;
