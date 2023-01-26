import Icons from "../SVGs/Icons";
import { Link } from "react-router-dom";

function LeftNavbar() {
  return (
    <div>
      <Link
        to=""
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none ps-4"
      >
        <Icons type="logo" />
      </Link>
      <ul className="fs-5 flex-column mt-3">
        {/* -- home -- */}
        <li className="home-nav py-3 d-flex flex-row">
          <Link to="/home" className="d-flex flex-row" aria-current="page">
            <Icons type="home" class="bi pe-none me-2" />
            <span className="ms-3 d-none d-lg-block">Home</span>
          </Link>
        </li>
        {/* -- explore -- */}
        <li className="py-3">
          <Link to="" className="d-flex flex-row">
            <Icons type="explore" />
            <span className="ms-3 d-none d-lg-block">Explore</span>
          </Link>
        </li>
        {/* -- notifications -- */}
        <li className="py-3">
          <Link to="" className="d-flex flex-row">
            <Icons type="notifications" />
            <span className="ms-3 d-none d-lg-block">Notifications</span>
          </Link>
        </li>
        {/* -- messages -- */}
        <li className="py-3">
          <Link to="" className="d-flex flex-row">
            <Icons type="messages" />
            <span className="ms-3 d-none d-lg-block">Messages</span>
          </Link>
        </li>
        {/* -- bookmarks -- */}
        <li className="py-3">
          <Link to="" className="d-flex flex-row">
            <Icons type="bookmarks" />
            <span className="ms-3 d-none d-lg-block">Bookmarks</span>
          </Link>
        </li>
        {/* -- lists -- */}
        <li className="py-3">
          <Link to="" className="d-flex flex-row">
            <Icons type="lists" />
            <span className="ms-3 d-none d-lg-block">Lists</span>
          </Link>
        </li>
        {/* -- profile -- */}
        <li className="py-3">
          <Link to="" className="d-flex flex-row">
            <Icons type="profile" />
            <span className="ms-3 d-none d-lg-block">Profile</span>
          </Link>
        </li>
        {/* -- more -- */}
        <li className="py-3">
          <Link to="" className="d-flex flex-row">
            <Icons type="more" />
            <span className="ms-3 d-none d-lg-block">More</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default LeftNavbar;
