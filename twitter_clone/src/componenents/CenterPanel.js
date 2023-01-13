import TweetBox from "./TweetBox";
import TweetDisplay from "./TweetDisplay";
import MobileDisplay from "./MobileDisplay";

function CenterPanel({ currentUser, currentUserInfo, addTweet }) {
  return (
    <div className="h-100 d-flex flex-column justify-content-between">
      <div>
        <TweetBox
          currentUser={currentUser}
          currentUserInfo={currentUserInfo}
          addTweet={addTweet}
        />
        <TweetDisplay
          currentUser={currentUser}
          currentUserInfo={currentUserInfo}
        />
      </div>
      <div className="sticky-bottom d-sm-none">
        <MobileDisplay
          // currentUser={currentUser}
          currentUserInfo={currentUserInfo}
        />
      </div>
    </div>
  );
}

export default CenterPanel;
