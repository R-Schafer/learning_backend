import UserPageHeader from "./UserPageHeader";
import UserPageTweetDisplay from "./UserPageTweetDisplay";
import UserPageMobileDisplay from "./UserPageMobileDisplay";

function UserPageCenterPanel({ userInfo }) {
  return (
    <div className="h-100 d-flex flex-column justify-content-between">
      <div>
        <UserPageHeader userInfo={userInfo} />
        <UserPageTweetDisplay userInfo={userInfo} />
      </div>
      <div className="sticky-bottom d-sm-none">
        <UserPageMobileDisplay userInfo={userInfo} />
      </div>
    </div>
  );
}

export default UserPageCenterPanel;
