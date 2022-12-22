import Image from "../images/Image";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { signOut, deleteUser } from "firebase/auth";

function MobileDropdown() {
  const navigate = useNavigate();
  const user = auth.currentUser;

  if (user !== null) {
    const username = user.username;
    const handle = user.handle;
    console.log(username);
    console.log(handle);
  }

  function handleDelete() {
    deleteUser(user)
      .then(() => {
        alert("user deleted");
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = "couldn't delete user";
        alert(errorMessage);
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
            Delete @handle
          </button>

          <button className="dropdown-item" onClick={handleLogout}>
            Log out @handle
          </button>
        </div>
      </div>
    </div>
  );
}

export default MobileDropdown;
