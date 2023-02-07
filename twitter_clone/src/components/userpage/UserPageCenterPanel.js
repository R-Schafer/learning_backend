import { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../../App";
import MobileDisplay from "../MobileDisplay";
import TweetDisplay from "../TweetDisplay";
import UserPageHeader from "./UserPageHeader";

function UserPageCenterPanel({ findUserInfo }) {
  const { currentUser } = useContext(LoginContext);

  return (
    <div className="d-flex flex-column justify-content-between">
      <div>
        <UserPageHeader findUserInfo={findUserInfo} />
        <TweetDisplay pinned={false} userInfo={findUserInfo} />
      </div>
      {currentUser ? (
        <div className="sticky-bottom d-sm-none">
          <MobileDisplay />
        </div>
      ) : (
        <>
          <div className="mobile-userpage-login sticky-bottom d-flex justify-content-center justify-content-evenly bg-black w-100 pb-2 pt-2">
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
  );
}

export default UserPageCenterPanel;
