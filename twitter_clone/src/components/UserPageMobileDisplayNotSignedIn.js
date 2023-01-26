import { Link } from "react-router-dom";

function UserPageMobileDisplayNotSignedIn() {
  return (
    <div className="mobile-userpage-login d-flex justify-content-center justify-content-evenly bg-black w-100 border-top border-light border-opacity-25 pb-2 pt-2">
      <Link to="/">
        <button className="rounded-pill p-1 px-5">Login</button>
      </Link>
      <Link to="/signup">
        <button className="rounded-pill p-1 px-5">Sign up</button>
      </Link>
    </div>
  );
}

export default UserPageMobileDisplayNotSignedIn;
