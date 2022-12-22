import Image from "../images/Image";
import { useNavigate } from "react-router-dom";
import { auth, db } from "./firebase";
import { signOut, deleteUser } from "firebase/auth";
import { deleteDoc, doc } from "firebase/firestore";

function LeftDropdown() {
  const navigate = useNavigate();
  const user = auth.currentUser;

  function handleDelete() {
    // delete user from email auth
    deleteUser(user)
      .then(() => {
        console.log("firebase auth deleted");
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = "couldn't delete user";
        console.log(errorMessage);
      });
    // delete user from firebase
    const docRef = doc(db, "users", "users.id");
    deleteDoc(docRef).then(console.log("firestore account deleted"));
  }

  function handleLogout() {
    signOut(auth)
      .then(() => {
        navigate("/");
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
          <strong>username</strong>
          <span className="opacity-50">
            <small>handle</small>
          </span>
        </h6>
      </div>

      <div className="dropdown-menu dropdown-menu-dark text-small shadow">
        <button className="dropdown-item" onClick={handleDelete}>
          Delete @handle
        </button>

        <button className="dropdown-item" onClick={handleLogout}>
          Log out @handle
        </button>
      </div>
    </div>
  );
}

export default LeftDropdown;
