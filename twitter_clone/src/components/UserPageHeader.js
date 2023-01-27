import Icons from "../SVGs/Icons";
import UserPageImage from "../images/UserPageImage";
// import { LoginContext } from "../App";
// import { useContext } from "react";

function UserPageHeader({ findUserInfo }) {
  // const { userInfo } = useContext(LoginContext);
  function handleBackClick() {
    console.log("back");
  }

  return (
    <div>
      <div className=" text-white d-flex flex-column border-0 border-bottom border-light border-opacity-25">
        <span className="d-flex flex-row align-items-center pb-2 px-3 py-3 d-sm-flex d-none">
          <div className="opacity-75 pe-3 ">
            <button className="back-button pb-1" onClick={handleBackClick}>
              <Icons type="back-button" />
            </button>
          </div>
          <h4>{findUserInfo.username}</h4>
          <div className="ps-1 pb-2">
            <Icons type="verify" />
          </div>
          <div className="mobile-logo d-sm-none d-flex justify-content-center flex-grow-1">
            <Icons type="logo" />
          </div>
        </span>
        <div className="bg-dark d-sm-none">
          <button
            className="back-button opacity-75 pe-3 pb-2 px-3 py-3"
            onClick={handleBackClick}
          >
            <Icons type="back-button" />
          </button>
        </div>
        <div className="d-flex flex-row bg-dark px-3 py-3">
          <UserPageImage />
        </div>
        <div className="d-flex flex-column w-100 px-3 py-3 justify-content-between">
          <div className="d-flex flex-row">
            <h4 className="mb-0">
              <strong>{findUserInfo.username}</strong>
            </h4>
            <div className="ps-1">
              <Icons type="verify" />
            </div>
          </div>

          <span className="opacity-50">
            <small>@{findUserInfo.handle}</small>
          </span>
          <p className="pt-3">
            This is a fake account used for demo purposes only.
            <br /> Click around, explore, and have fun!
          </p>
          <div className="opacity-50 d-flex flex-row">
            <div>
              <Icons type="calendar" /> Joined Date 2023
            </div>
            <div className="ps-4">
              <Icons type="location" /> Location, Location
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPageHeader;
