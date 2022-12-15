import LeftNavbar from "./LeftNavbar";
import LeftDropdown from "./LeftDropdown";
import Icons from "../SVGs/Icons";

function LeftPanel() {
  return (
    <div className="h-100">
      <div className="h-100 d-flex flex-column justify-content-between">
        <LeftNavbar />
        <LeftDropdown />
      </div>
    </div>
  );
}

export default LeftPanel;
