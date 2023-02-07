import { Link } from "react-router-dom";
import ReactTimeAgo from "react-time-ago";
import Icons from "../SVGs/Icons";
import Image from "./images/Image";

function Tweet({ userInfo, time, tweet }) {
  return (
    <Link
      to=""
      className="bg-black d-flex flex-column flex-wrap py-3 px-3 border-bottom border-light border-opacity-25"
    >
      <div className="d-flex flex-row">
        <Image userInfo={userInfo} />
        <div className="d-flex w-100 pt-2 ps-2 justify-content-between">
          <div className="w-100">
            <h6 className="mb-0">
              <span className="pe-1">
                <strong>{userInfo.username}</strong>
              </span>
              <Icons type="verify" />
              <span className="opacity-50 ps-2">
                {userInfo.username} ·{" "}
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
}

export default Tweet;
