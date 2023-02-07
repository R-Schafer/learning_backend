import Searchbar from "./Searchbar";
import Happening from "./Happening";
import Follow from "./Follow";

function RightPanel() {
  return (
    <div>
      <Searchbar />
      <Happening />
      <Follow />
      <footer className="opacity-50 text-center text-white pb-2">
        <small>Copyright © Rainey Schafer {new Date().getFullYear()}</small>
      </footer>
    </div>
  );
}

export default RightPanel;
