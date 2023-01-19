import Icons from "../SVGs/Icons";
import Image from "../images/Image";
import { Link } from "react-router-dom";
import ReactTimeAgo from "react-time-ago";

function TweetDisplay({ currentUserInfo }) {
  const keys = Object.keys(currentUserInfo.tweets).sort().reverse();
  const tweetList = keys.map((key) => [key, currentUserInfo.tweets[key]]);

  // conditional for when a user doesn't have tweet

  const displayTweets = tweetList.map(([time, tweet]) => {
    return (
      <Link
        to=""
        className="bg-black d-flex flex-column py-3 px-3 border-bottom border-light border-opacity-25"
        aria-current="true"
      >
        <div className="d-flex flex-row">
          <Image />
          <div className="d-flex w-100 pt-2 ps-2 justify-content-between">
            <div className="w-100">
              <h6 className="mb-0">
                <span className="pe-1">
                  <strong>{currentUserInfo.username}</strong>
                </span>
                <Icons type="verify" />
                <span className="opacity-50 ps-2">
                  {currentUserInfo.username} ·{" "}
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

  return (
    <div>
      <Link
        to=""
        className="bg-black d-flex flex-column py-3 px-3 border-bottom border-light border-opacity-25"
        aria-current="true"
      >
        <div className="opacity-50 ms-5">
          <Icons type="pin" />
          <span className="ps-1">
            <small>Pinned Tweet</small>
          </span>
        </div>
        <div className="d-flex flex-row">
          <Image />
          <div className="d-flex w-100 pt-2 ps-2 justify-content-between">
            <div className="w-100">
              <h6 className="mb-0">
                <span className="pe-1">
                  <strong>Rainey's Clone</strong>
                </span>
                <Icons type="verify" />
                <span className="opacity-50 ps-2">
                  @raineys_clone · 12/15/22
                </span>
              </h6>
              <p className="fs-6 mb-0 pt-2">
                Welcome to my Twitter clone. Please note that Signup, Login,
                Logout, Delete, and Tweet are the only functionalities. Much of
                this clone is for aestetics only! I plan to expand
                functionalities in the future.
              </p>
              <div className="d-flex justify-content-between w-100 pt-3 pe-3">
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
      {displayTweets}
    </div>
  );
}

export default TweetDisplay;
