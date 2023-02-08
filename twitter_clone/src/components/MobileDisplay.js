import Icons from "../SVGs/Icons";
import MobileDropdown from "./MobileDropdown";
import { Link } from "react-router-dom";

function MobileDisplay() {
  return (
    <div className="mobile-display border-top border-light border-opacity-25">
      <ul className="nav pt-2 flex-row justify-content-around">
        {/* -- home -- */}
        <li className="home-nav">
          <Link to="/home" className="nav-link">
            <Icons type="home" class="bi pe-none me-2" />
          </Link>
        </li>
        {/* -- search -- */}
        <li>
          <Link to="" className="nav-link">
            <Icons type="search" class="bi pe-none me-2" />
          </Link>
        </li>
        {/* -- logout -- */}
        <MobileDropdown />
        {/* -- notifications -- */}
        <li>
          <Link to="" className="nav-link">
            <Icons type="notifications" class="bi pe-none me-2" />
          </Link>
        </li>
        {/* -- messages -- */}
        <li>
          <Link to="" className="nav-link">
            <Icons type="messages" class="bi pe-none me-2" />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default MobileDisplay;
