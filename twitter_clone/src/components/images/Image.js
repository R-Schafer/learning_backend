import { useContext } from "react";
import { LoginContext } from "../../App";

function Image() {
  const { currentUserInfo } = useContext(LoginContext);
  return (
    <img
      src={currentUserInfo.image}
      alt="randomly generated faker pic"
      width="50"
      height="50"
      className="rounded-circle me-2 "
    />
  );
}

export default Image;
