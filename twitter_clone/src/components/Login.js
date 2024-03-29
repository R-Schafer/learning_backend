import { useContext, useState } from "react";
import Icons from "../SVGs/Icons";
import { Link, Navigate } from "react-router-dom";
import { LoginContext } from "../App";
import Loading from "./Loading";

function Login() {
  const { login, currentUser, loading } = useContext(LoginContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invalidUser, setInvalidUser] = useState(false);

  async function handleLogin() {
    try {
      await login(email, password);
    } catch (error) {
      console.log(error);
      setInvalidUser(true);
    }
  }

  if (loading) {
    return <Loading />;
  }

  return currentUser ? (
    <Navigate to="/home" />
  ) : (
    <div className="h-100 d-flex flex-column justify-content-center align-items-center">
      <div className="box bg-dark rounded-3 text-center p-3">
        <Icons type="logo" />
        <h1 className="text-light">Login to Clone</h1>
        <form>
          {/* ------------------ email ------------------ */}
          <div className="input-group mt-3">
            <input
              type="email"
              name="email"
              className="form-control bg-dark text-light"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* ------------------ password ------------------ */}
          <div className="input-group mt-3">
            <input
              type="password"
              name="password"
              className="form-control bg-dark text-light"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="text-danger">
            {invalidUser
              ? "No account associated with this email and/or password"
              : ""}
          </div>
          {/* ------------------ login button ------------------ */}
          <div className="d-flex mt-3 flex-column justify-content-center align-items-center">
            <button
              className="login-btn btn btn-outline-* w-100"
              type="button"
              onClick={handleLogin}
            >
              LOGIN
            </button>
          </div>
        </form>
        {/* ------------------ signup ------------------ */}
        <p className="signup-link text-light d-flex flex-row justify-content-center align-content-center mt-3">
          Don't have an account?
          <Link to="/signup" className="ps-2">
            <span>Sign up</span>
          </Link>
        </p>
        {/* ------------------ account demo ------------------ */}
        <p className="signup-link text-light d-flex flex-column justify-content-center align-content-center">
          Don't want to make an account?
          <Link to="/user/raineys_clone">
            <span>Go to demo</span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
