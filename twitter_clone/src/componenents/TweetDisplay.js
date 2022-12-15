import Icons from "../SVGs/Icons";
import Image from "../images/Image";

function TweetDisplay() {
  return (
    <div>
      <a
        href="/"
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
            <div>
              <h6 className="mb-0">
                <span className="pe-1">
                  <strong>Rainey's Clone</strong>
                </span>
                <Icons type="verify" />
                <span className="opacity-50 ps-2">@raineys_clone · 1m</span>
              </h6>
              <p className="fs-6 mb-0 pt-2">
                Welcome to my Twitter clone. Please note that Register, Login,
                Logout, and Tweet are the only functionalities. Much of this
                clone is for aestetics only! I plan to expand functionalities in
                the future.
              </p>
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
      </a>
    </div>
  );
}

export default TweetDisplay;
