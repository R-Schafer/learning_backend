import Searchbar from "./Searchbar";
import Happening from "./Happening";
import Follow from "./Follow";

function RightPanel({ currentUser }) {
  return (
    <div>
      <Searchbar />
      <Happening />
      <Follow currentUser={currentUser} />
      <footer className="opacity-50 text-center text-white pb-2">
        <small>Copyright © Rainey Schafer 2022</small>
      </footer>
    </div>
  );
}

export default RightPanel;
