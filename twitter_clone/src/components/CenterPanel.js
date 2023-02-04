import TweetBox from "./TweetBox";
import TweetDisplay from "./TweetDisplay";
import MobileDisplay from "./MobileDisplay";

function CenterPanel() {
  return (
    <div className="">
      <TweetBox />
      <TweetDisplay />

      <div className="sticky-bottom d-sm-none">
        <MobileDisplay />
      </div>
    </div>
  );
}

export default CenterPanel;
