import { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../App";
import MobileDisplay from "./MobileDisplay";
import UserPageHeader from "./UserPageHeader";
import UserPageTweetDisplay from "./UserPageTweetDisplay";

function UserPageCenterPanel({ findUserInfo }) {
  const { currentUser } = useContext(LoginContext);

  return (
    <div className="h-100 w-100 d-flex flex-column justify-content-between">
      <div>
        <UserPageHeader findUserInfo={findUserInfo} />
        <UserPageTweetDisplay findUserInfo={findUserInfo} />
      </div>
      <div className="sticky-bottom d-sm-none">
        {currentUser ? (
          <MobileDisplay />
        ) : (
          <>
            <div className="mobile-userpage-login d-flex justify-content-center justify-content-evenly bg-black w-100 border-top border-light border-opacity-25 pb-2 pt-2">
              <Link to="/">
                <button className="rounded-pill p-1 px-5">Login</button>
              </Link>
              <Link to="/signup">
                <button className="rounded-pill p-1 px-5">Sign up</button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default UserPageCenterPanel;
