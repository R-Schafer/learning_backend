import Icons from "../SVGs/Icons";
import FollowPageImage from "./images/FollowPageImage";
import { Link } from "react-router-dom";

function PinnedTweet() {
  return (
    <div className="pinned-tweet">
      <Link
        to="/user/raineys_clone"
        className="bg-black d-flex flex-column py-3 px-3 border-bottom border-light border-opacity-25"
      >
        <div className="opacity-50 ms-5">
          <Icons type="pin" />
          <span className="ps-1">
            <small>Pinned Tweet</small>
          </span>
        </div>
        <div className="d-flex flex-row">
          <FollowPageImage handle={"raineys_clone"} />
          <div className="d-flex w-100 pt-2 ps-2 justify-content-between">
            <div className="w-100">
              <h6 className="mb-0">
                <span className="pe-1">
                  <strong>Rainey's Clone</strong>
                </span>
                <Icons type="verify" />
                <span className="opacity-50 ps-2">@raineys_clone · Dec 15</span>
              </h6>
              <p className="fs-6 mb-0 pt-2">
                Welcome to my clone! This app has limited functionality - I plan
                to add more in the future. Click on my account for more
                information.
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
    </div>
  );
}

export default PinnedTweet;
