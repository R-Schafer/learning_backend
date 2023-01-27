import { useContext } from "react";
import { LoginContext } from "../App";
import UserPageHeader from "./UserPageHeader";
import UserPageTweetDisplay from "./UserPageTweetDisplay";
import UserPageMobileDisplayNotSignedIn from "./UserPageMobileDisplayNotSignedIn";

function UserPageCenterPanel({ findUserInfo }) {
  const { currentUser } = useContext(LoginContext);

  return (
    <div className="h-100 w-100 d-flex flex-column justify-content-between">
      <div>
        <UserPageHeader findUserInfo={findUserInfo} />
        <UserPageTweetDisplay findUserInfo={findUserInfo} />
      </div>
      {currentUser ? (
        <></>
      ) : (
        <div className="sticky-bottom">
          <UserPageMobileDisplayNotSignedIn />
        </div>
      )}
    </div>
  );
}

export default UserPageCenterPanel;
