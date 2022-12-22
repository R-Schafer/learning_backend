import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/home");
        alert("login successful");
      })
      .catch((error) => {
        const errorMessage = "Account not found, please try again";
        alert(errorMessage);
      });
  }

  return (
    <div className="container-xxxl bg-white h-100 d-flex flex-column justify-content-center">
      <div className="row justify-content-center">
        <div className="col-10 col-md-4 col-lg-4 col-xl-3 border text-center p-3">
          <h1>Login</h1>
          <form>
            {/* ------------------ email ------------------ */}
            <div className="input-group mb-3">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email"
                aria-label="Email"
                aria-describedby="basic-addon1"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* ------------------ password ------------------ */}
            <div className="input-group mb-3">
              <input
                type="text"
                name="password"
                className="form-control"
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon1"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {/* ------------------ login button ------------------ */}
            <div className="d-flex flex-column justify-content-center align-items-center">
              <button
                className="login-btn btn btn-outline-primary w-75"
                type="button"
                onClick={handleLogin}
              >
                LOGIN
              </button>
              {/* ------------------ login with Google ------------------ */}
              {/* <span>- OR -</span>
              <button
                className="google-login-btn btn btn-outline-primary w-75 mb-3"
                type="button"
              >
                SIGN IN WITH GOOGLE
              </button> */}
            </div>
          </form>
          {/* ------------------ signup ------------------ */}
          <p className="signup d-flex flex-row justify-content-center align-content-center">
            Don't have an account?
            <Link to="/signup" className="text-primary ps-2">
              <span>Sign up</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
