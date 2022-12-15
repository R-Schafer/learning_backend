import Image from "../images/Image";

function LeftDropdown() {
  return (
    <div className="dropdown ps-3">
      <a
        href="/"
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

export default LeftDropdown;
