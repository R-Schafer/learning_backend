import Icons from "../SVGs/Icons";
import { Link } from "react-router-dom";
import FollowPageImage from "./images/FollowPageImage";

function Follow() {
  return (
    <div className="d-flex text-left">
      <div className="col bg-dark text-white card-body rounded-4">
        <h4 className="pt-3 ms-3">Who to follow</h4>
        <div className="d-flex flex-column gap-2 w-100 pt-2 justify-content-between">
          <ul className="follow p-0 m-0 w-100">
            <li className="pb-2 ps-3 pt-2">
              <Link className="d-flex flex-row" to="/user/raineys_clone">
                <FollowPageImage handle={"raineys_clone"} />
                <div className="d-flex flex-column w-100 py-2 justify-content-between">
                  <h6 className="mb-0 d-flex flex-row">
                    <strong>Rainey's Clone</strong>
                    <div className="ps-1">
                      <Icons type="verify" />
                    </div>
                  </h6>
                  <span className="opacity-50">
                    <small>@raineys_clone</small>
                  </span>
                </div>
              </Link>
            </li>

            <li className="pb-2 ps-3 pt-2">
              <Link className="d-flex flex-row" to="/user/bot4lyfe">
                <FollowPageImage handle={"bot4lyfe"} />
                <div className="d-flex flex-column w-100 py-2 justify-content-between">
                  <h6 className="mb-0 d-flex flex-row">
                    <strong>I'm a bot</strong>
                    <div className="ps-1">
                      <Icons type="verify" />
                    </div>
                  </h6>
                  <span className="opacity-50">
                    <small>@bot4lyfe</small>
                  </span>
                </div>
              </Link>
            </li>

            <li className="pb-2 ps-3 pt-2">
              <Link className="d-flex flex-row" to="/user/thisisafake">
                <FollowPageImage handle={"thisisafake"} />
                <div className="d-flex flex-column w-100 py-2 justify-content-between">
                  <h6 className="mb-0 d-flex flex-row">
                    <strong>Fake Fake</strong>
                    <div className="ps-1">
                      <Icons type="verify" />
                    </div>
                  </h6>
                  <span className="opacity-50">
                    <small>@thisisafake</small>
                  </span>
                </div>
              </Link>
            </li>
          </ul>
          <span className="show-more ps-3 pb-3">
            <small>Show more</small>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Follow;
