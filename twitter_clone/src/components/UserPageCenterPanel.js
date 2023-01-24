import UserPageHeader from "./UserPageHeader";
import UserPageTweetDisplay from "./UserPageTweetDisplay";
import UserPageMobileDisplayNotSignedIn from "./UserPageMobileDisplayNotSignedIn";

function UserPageCenterPanel() {
  return (
    <div className="h-100 d-flex flex-column justify-content-between">
      <div>
        <UserPageHeader />
        <UserPageTweetDisplay />
      </div>
      <div className="sticky-bottom d-sm-none">
        <UserPageMobileDisplayNotSignedIn />
      </div>
    </div>
  );
}

export default UserPageCenterPanel;
