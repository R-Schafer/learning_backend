import Tweet from "./Tweet";
import PinnedTweet from "./PinnedTweet";

function TweetDisplay({ pinned, userInfo }) {
  const keys = Object.keys(userInfo.tweets).sort().reverse();
  const tweetList = keys.map((key) => [key, userInfo.tweets[key]]);

  const displayTweets = tweetList.map(([time, tweet]) => {
    return <Tweet key={time} userInfo={userInfo} time={time} tweet={tweet} />;
  });

  return pinned ? (
    <>
      <PinnedTweet />
      {displayTweets}
    </>
  ) : (
    <>{displayTweets}</>
  );
}

export default TweetDisplay;
