import Image from "../images/Image";

function MobileDropdown() {
  return (
    <div className="dropdown pb-3">
      <a
        href="/"
        className="d-flex align-items-center text-white text-decoration-none "
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <Image />
      </a>
      <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
        <li>
          <a className="dropdown-item" href="/">
            Delete @username
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/">
            Log out @username
          </a>
        </li>
      </ul>
    </div>
  );
}

export default MobileDropdown;
