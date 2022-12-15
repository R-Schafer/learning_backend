import Icons from "../SVGs/Icons";
import Image from "../images/Image";

function TweetBox() {
  return (
    <div>
      <div className="tweet-area text-white bg-black list-group-item d-flex flex-column px-3 py-3 border-0 border-bottom border-light border-opacity-25">
        <span className="d-flex flex-row justify-content-between pb-2">
          <h4 className="d-sm-flex d-none">Home</h4>
          <div className="mobile-logo d-sm-none d-flex justify-content-center flex-grow-1">
            <Icons type="logo" />
          </div>
          <Icons type="stars" />
        </span>
        <div className="d-flex flex-row">
          <Image />
          <div className="w-100 form-group d-flex align-items-end flex-column">
            <textarea
              name="user-message"
              id="user-message"
              type="text"
              className="form-control fs-5 text-white bg-black border border-0"
              maxlength="280"
              placeholder="What's happening?"
            ></textarea>
            <button type="button" className="btn btn-color-1 rounded-pill mt-2">
              Tweet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TweetBox;
