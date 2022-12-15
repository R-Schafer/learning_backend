import Icons from "../SVGs/Icons";
import MobileDropdown from "./MobileDropdown";

function MobileNavbar() {
  return (
    <div className="w-100 bg-black border-top border-light border-opacity-25">
      <ul className="nav pt-2 flex-row justify-content-around">
        {/* -- home -- */}
        <li>
          <a href="/" className="nav-link" aria-current="page">
            <Icons type="home" class="bi pe-none me-2" />
          </a>
        </li>
        {/* -- search -- */}
        <li>
          <a href="/" className="nav-link" aria-current="page">
            <Icons type="search" class="bi pe-none me-2" />
          </a>
        </li>
        {/* -- logout -- */}
        <MobileDropdown />
        {/* -- notifications -- */}
        <li>
          <a href="/" className="nav-link" aria-current="page">
            <Icons type="notifications" class="bi pe-none me-2" />
          </a>
        </li>
        {/* -- messages -- */}
        <li>
          <a href="/" className="nav-link" aria-current="page">
            <Icons type="messages" class="bi pe-none me-2" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default MobileNavbar;
