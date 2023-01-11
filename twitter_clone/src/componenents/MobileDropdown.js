import Image from "../images/Image";
import { useNavigate } from "react-router-dom";
import { auth, db } from "./firebase";
import { signOut, deleteUser } from "firebase/auth";
import { doc, deleteDoc } from "firebase/firestore";

function MobileDropdown({ currentUser, currentUserInfo }) {
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
        alert("sign out successful");
      })
      .catch((error) => {
        const errorMessage = "could not sign user out";
        alert(errorMessage);
      });
  }

  return (
    <div className="dropdown pb-2">
      <div
        className="d-flex align-items-center text-white text-decoration-none"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <Image />
        <div className="dropdown-menu dropdown-menu-dark text-small shadow">
          <button className="dropdown-item" onClick={handleDelete}>
            Delete {currentUserInfo.handle}
          </button>

          <button className="dropdown-item" onClick={handleLogout}>
            Log out {currentUserInfo.handle}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MobileDropdown;
