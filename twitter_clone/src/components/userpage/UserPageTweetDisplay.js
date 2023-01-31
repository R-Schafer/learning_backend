import Icons from "../../SVGs/Icons";
import UserPageImage from "../images/UserPageImage";
import { Link } from "react-router-dom";
import ReactTimeAgo from "react-time-ago";

function UserPageTweetDisplay({ findUserInfo }) {
  const keys = Object.keys(findUserInfo.tweets).sort().reverse();
  const tweetList = keys.map((key) => [key, findUserInfo.tweets[key]]);

  const displayTweets = tweetList.map(([time, tweet]) => {
    return (
      <Link
        key={time}
        to=""
        className="bg-black d-flex flex-column py-3 px-3 border-bottom border-light border-opacity-25"
        aria-current="true"
      >
        <div className="user-img-sm d-flex flex-row">
          <UserPageImage findUserInfo={findUserInfo} />
          <div className="d-flex w-100 pt-2 ps-2 justify-content-between">
            <div className="w-100">
              <h6 className="mb-0">
                <span className="pe-1">
                  <strong>{findUserInfo.username}</strong>
                </span>
                <Icons type="verify" />
                <span className="opacity-50 ps-2">
                  {findUserInfo.username} ·{" "}
                  <ReactTimeAgo
                    date={new Date(parseInt(time, 10))}
                    locale="en-US"
                    timeStyle="twitter"
                  />
                </span>
              </h6>
              <p className="fs-6 mb-0 pt-2">{tweet}</p>
              <div className="d-flex justify-content-between pt-3 pe-3">
                {/* -- comment -- */}
                <Icons type="comment" />
                {/* -- retweet -- */}
                <Icons type="retweet" />
                {/* -- heart -- */}
                <Icons type="heart" />
                {/* -- share -- */}
                <Icons type="share" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  });

  return <div>{displayTweets}</div>;
}

export default UserPageTweetDisplay;
