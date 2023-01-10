import TweetBox from "./TweetBox";
import TweetDisplay from "./TweetDisplay";
import MobileNavbar from "./MobileNavbar";

function CenterPanel({ currentUser, currentUserInfo }) {
  return (
    <div className="h-100 d-flex flex-column justify-content-between">
      <div>
        <TweetBox currentUser={currentUser} currentUserInfo={currentUserInfo} />
        <TweetDisplay
          currentUser={currentUser}
          currentUserInfo={currentUserInfo}
        />
      </div>
      <div className="sticky-bottom d-sm-none">
        <MobileNavbar
          currentUser={currentUser}
          currentUserInfo={currentUserInfo}
        />
      </div>
    </div>
  );
}

export default CenterPanel;
