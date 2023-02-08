import { useContext } from "react";
import { LoginContext } from "../App";
import TweetBox from "./TweetBox";
import TweetDisplay from "./TweetDisplay";
import MobileDisplay from "./MobileDisplay";

function CenterPanel() {
  const { currentUserInfo } = useContext(LoginContext);
  return (
    <>
      <TweetBox />
      <TweetDisplay pinned={true} userInfo={currentUserInfo} />
      <div className="d-sm-none">
        <MobileDisplay />
      </div>
    </>
  );
}

export default CenterPanel;
