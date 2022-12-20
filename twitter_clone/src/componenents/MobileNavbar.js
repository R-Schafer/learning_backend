import Icons from "../SVGs/Icons";
import MobileDropdown from "./MobileDropdown";
import { Link } from "react-router-dom";

function MobileNavbar() {
  return (
    <div className="w-100 bg-black border-top border-light border-opacity-25">
      <ul className="nav pt-2 flex-row justify-content-around">
        {/* -- home -- */}
        <li>
          <Link to="" className="nav-link" aria-current="page">
            <Icons type="home" class="bi pe-none me-2" />
          </Link>
        </li>
        {/* -- search -- */}
        <li>
          <Link to="" className="nav-link" aria-current="page">
            <Icons type="search" class="bi pe-none me-2" />
          </Link>
        </li>
        {/* -- logout -- */}
        <MobileDropdown />
        {/* -- notifications -- */}
        <li>
          <Link to="" className="nav-link" aria-current="page">
            <Icons type="notifications" class="bi pe-none me-2" />
          </Link>
        </li>
        {/* -- messages -- */}
        <li>
          <Link to="" className="nav-link" aria-current="page">
            <Icons type="messages" class="bi pe-none me-2" />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default MobileNavbar;
