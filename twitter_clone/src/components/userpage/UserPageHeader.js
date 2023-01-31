import Icons from "../../SVGs/Icons";
import UserPageHeaderImage from "../images/UserPageHeaderImage";
import UserPageBanner from "../images/UserPageBanner";

function UserPageHeader({ findUserInfo }) {
  return (
    <div>
      <div className=" text-white d-flex flex-column border-0 border-bottom border-light border-opacity-25">
        <span className="d-flex flex-row align-items-center pb-2 px-3 py-3 d-sm-flex d-none">
          <h4>{findUserInfo.username}</h4>
          <div className="ps-1 pb-2">
            <Icons type="verify" />
          </div>
          <div className="mobile-logo d-sm-none d-flex justify-content-center flex-grow-1">
            <Icons type="logo" />
          </div>
        </span>
        <div className="d-flex flex-column">
          <div className="banner">
            <UserPageBanner findUserInfo={findUserInfo} />
          </div>
          <div className="user-img-big px-3">
            <UserPageHeaderImage findUserInfo={findUserInfo} />
          </div>
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
              <Icons type="calendar" /> Joined
            </div>
            <div className="ps-4">
              <Icons type="location" /> Location
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPageHeader;
