import TweetBox from "./TweetBox";
import TweetDisplay from "./TweetDisplay";
import MobileDisplay from "./MobileDisplay";

function CenterPanel() {
  return (
    <>
      <TweetBox />
      <TweetDisplay />

      <div className="sticky-bottom d-sm-none">
        <MobileDisplay />
      </div>
    </>
  );
}

export default CenterPanel;
