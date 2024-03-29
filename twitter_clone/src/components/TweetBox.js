import { useState, useContext } from "react";
import { LoginContext } from "../App";
import Icons from "../SVGs/Icons";
import Image from "./images/Image";

function TweetBox() {
  const { currentUserInfo, addTweet } = useContext(LoginContext);
  const [tweet, setTweet] = useState();

  async function checkTweet() {
    // remove any trailing whitespace
    const trimmedTweet = tweet.trim();
    if (trimmedTweet.length > 0) {
      const timeStamp = Date.now();
      await addTweet(timeStamp, trimmedTweet);
      // reset textarea
      setTweet("");
    }
  }

  return (
    <div className="text-white bg-black d-flex flex-column px-3 py-3 border-bottom border-light border-opacity-25">
      <span className="d-flex flex-row justify-content-between pb-2">
        <h4 className="d-sm-flex d-none">Home</h4>
        <div className="mobile-logo d-sm-none d-flex justify-content-center flex-grow-1">
          <Icons type="logo" />
        </div>
        <Icons type="stars" />
      </span>
      <div className="d-flex flex-row">
        <Image userInfo={currentUserInfo} />
        <div className="w-100 form-group d-flex align-items-end flex-column">
          <textarea
            name="message"
            id="user-message"
            type="text"
            className="form-control fs-5 text-white bg-black border border-0"
            maxLength="280"
            minLength="1"
            placeholder="What's happening?"
            value={tweet}
            onChange={(e) => setTweet(e.target.value)}
          ></textarea>
          <button
            type="button"
            className="tweet-btn btn btn-color-1 rounded-pill mt-2"
            onClick={checkTweet}
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}

export default TweetBox;
