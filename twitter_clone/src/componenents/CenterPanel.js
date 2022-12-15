import TweetBox from "./TweetBox";
import TweetDisplay from "./TweetDisplay";
import MobileNavbar from "./MobileNavbar";

function CenterPanel() {
  return (
    <div className="h-100 d-flex flex-column justify-content-between">
      <div>
        <TweetBox />
        <TweetDisplay />
      </div>
      <div className="sticky-bottom d-sm-none">
        <MobileNavbar />
      </div>
    </div>
  );
}

export default CenterPanel;
