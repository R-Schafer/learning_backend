import TweetBox from "./TweetBox";
import TweetDisplay from "./TweetDisplay";
import MobileDisplay from "./MobileDisplay";

function CenterPanel() {
  return (
    <div className="h-100 d-flex flex-column justify-content-between">
      <div>
        <TweetBox />
        <TweetDisplay />
      </div>
      <div className="sticky-bottom d-sm-none">
        <MobileDisplay />
      </div>
    </div>
  );
}

export default CenterPanel;
