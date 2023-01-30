import Icons from "../SVGs/Icons";
import { Link } from "react-router-dom";

function UserPageLeftPanel() {
  return (
    <div className="h-100">
      <div className="d-flex flex-column justify-content-between">
        <Link
          to=""
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none ps-4"
        >
          <Icons type="logo" />
        </Link>
        <ul className="fs-5 flex-column mt-3">
          {/* -- explore -- */}
          <li className="py-3">
            <Link to="" className="d-flex flex-row">
              <Icons type="explore" />
              <span className="ms-3 d-none d-lg-block">Explore</span>
            </Link>
          </li>
          {/* -- settings -- */}
          <li className="py-3">
            <Link to="" className="d-flex flex-row">
              <Icons type="settings" />
              <span className="ms-3 d-none d-lg-block">Settings</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserPageLeftPanel;
