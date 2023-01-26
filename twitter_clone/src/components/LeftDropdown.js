import Image from "../images/Image";
import { useNavigate } from "react-router-dom";
import { auth, db } from "./firebase";
import { signOut, deleteUser } from "firebase/auth";
import { doc, deleteDoc } from "firebase/firestore";

import { useContext } from "react";
import { LoginContext } from "../App";

function LeftDropdown() {
  const { currentUser, currentUserInfo, setCurrentUser, setCurrentUserInfo } =
    useContext(LoginContext);
  const navigate = useNavigate();

  async function handleDelete() {
    // delete from firestore
    await deleteDoc(doc(db, "users", currentUser));
    console.log("user deleted from firestore");
    // delete from firebase auth
    const user = auth.currentUser;
    deleteUser(user)
      .then(() => {
        navigate("/");
        setCurrentUser(null);
        setCurrentUserInfo(null);
        console.log("user deleted from firebase auth");
      })
      .catch((error) => {
        const errorMessage = "could not delete user";
        console.log(errorMessage);
      });
  }

  function handleLogout() {
    signOut(auth)
      .then(() => {
        navigate("/");
        setCurrentUser(null);
        setCurrentUserInfo(null);
        console.log("sign out successful");
      })
      .catch((error) => {
        const errorMessage = "could not sign user out";
        console.log(errorMessage);
      });
  }

  return (
    <div className="dropdown ps-3">
      <div
        className="d-flex align-items-center text-white text-decoration-none"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <Image />
        <h6 className="mb-0 d-none d-lg-flex flex-column">
          <strong>{currentUserInfo.username}</strong>
          <span className="opacity-50">
            <small>@{currentUserInfo.handle}</small>
          </span>
        </h6>
      </div>

      <div className="dropdown-menu dropdown-menu-dark text-small shadow">
        <button className="dropdown-item" onClick={handleDelete}>
          Delete @{currentUserInfo.handle}
        </button>

        <button className="dropdown-item" onClick={handleLogout}>
          Log out @{currentUserInfo.handle}
        </button>
      </div>
    </div>
  );
}

export default LeftDropdown;
