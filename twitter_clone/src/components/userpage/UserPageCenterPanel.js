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
        <div className="d-sm-none">
          <MobileDisplay />
        </div>
      ) : (
        <div className="mobile-display mobile-userpage-login pt-2 pb-2 d-flex bg-black justify-content-around border-top border-light border-opacity-25">
          <Link to="/">
            <button className="rounded-pill p-1 px-5">Login</button>
          </Link>

          <Link to="/signup">
            <button className="rounded-pill p-1 px-5">Sign up</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default UserPageCenterPanel;
