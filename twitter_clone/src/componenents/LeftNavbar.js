import Icons from "../SVGs/Icons";

function LeftNavbar() {
  return (
    <div>
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none ps-4"
      >
        <Icons type="logo" />
      </a>
      <ul className="fs-5 flex-column mt-3">
        {/* -- home -- */}
        <li className="py-3 d-flex flex-row">
          <a href="/" className="d-flex flex-row" aria-current="page">
            <Icons type="home" class="bi pe-none me-2" />
            <span className="ms-3 d-none d-lg-block">Home</span>
          </a>
        </li>
        {/* -- explore -- */}
        <li className="py-3">
          <a href="/" className="d-flex flex-row">
            <Icons type="explore" />
            <span className="ms-3 d-none d-lg-block">Explore</span>
          </a>
        </li>
        {/* -- notifications -- */}
        <li className="py-3">
          <a href="/" className="d-flex flex-row">
            <Icons type="notifications" />
            <span className="ms-3 d-none d-lg-block">Notifications</span>
          </a>
        </li>
        {/* -- messages -- */}
        <li className="py-3">
          <a href="/" className="d-flex flex-row">
            <Icons type="messages" />
            <span className="ms-3 d-none d-lg-block">Messages</span>
          </a>
        </li>
        {/* -- bookmarks -- */}
        <li className="py-3">
          <a href="/" className="d-flex flex-row">
            <Icons type="bookmarks" />
            <span className="ms-3 d-none d-lg-block">Bookmarks</span>
          </a>
        </li>
        {/* -- lists -- */}
        <li className="py-3">
          <a href="/" className="d-flex flex-row">
            <Icons type="lists" />
            <span className="ms-3 d-none d-lg-block">Lists</span>
          </a>
        </li>
        {/* -- profile -- */}
        <li className="py-3">
          <a href="/" className="d-flex flex-row">
            <Icons type="profile" />
            <span className="ms-3 d-none d-lg-block">Profile</span>
          </a>
        </li>
        {/* -- more -- */}
        <li className="py-3">
          <a href="/" className="d-flex flex-row">
            <Icons type="more" />
            <span className="ms-3 d-none d-lg-block">More</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default LeftNavbar;
