import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc } from "firebase/firestore";
import { auth, colRef } from "./firebase";

function Signup() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [handle, setHandle] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSignup(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/home");
        alert("create account successfully");
        addNewUserToFirestore();
      })
      .catch((error) => {
        // maybe add something about the user already having an account and can't register again
        const errorMessage = "couldn't add user to firestore";
        alert(errorMessage);
      });

    function addNewUserToFirestore() {
      addDoc(colRef, {
        name: name,
        username: username,
        handle: handle,
        email: email,
        password: password,
      }).then(console.log("added"));

      // tried another way to get the id but there was an error
      // async function addNewUserToFirestore() {
      //   const docRef = await addDoc(colRef, {
      //     name: name,
      //     username: username,
      //     handle: handle,
      //     email: email,
      //     password: password,
      //   });
      //   console.log("Document ID: ", docRef.id);
    }
  }

  return (
    <div className="container-xxxl bg-white h-100 d-flex flex-column justify-content-center">
      <div className="row justify-content-center">
        <div className="col-10 col-md-4 col-lg-4 col-xl-3 border text-center p-3">
          <h1>REGISTER</h1>
          <form>
            {/* ------------------ name ------------------ */}
            <div className="input-group mb-3">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="First and Last Name"
                aria-label="Name"
                aria-describedby="basic-addon1"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* ------------------ username ------------------ */}
            <div className="input-group mb-3">
              <input
                type="text"
                name="username"
                className="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            {/* ------------------ handle ------------------ */}
            <div className="input-group mb-3">
              <input
                type="text"
                name="handle"
                className="form-control"
                placeholder="@handle"
                aria-label="Handle"
                aria-describedby="basic-addon1"
                required
                onChange={(e) => setHandle(e.target.value)}
              />
            </div>

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
            {/* ------------------ sign up button ------------------ */}
            <div className="d-grid gap-2">
              <button
                className="signup-btn btn btn-outline-primary w-75 mb-3 mx-auto"
                type="button"
                onClick={handleSignup}
              >
                SIGN UP
              </button>
            </div>
          </form>
          {/* ------------------ login ------------------ */}
          <p className="signup d-flex flex-row justify-content-center align-content-center">
            Already have an account?
            <Link to="/" className="text-primary ps-2">
              <span>Log In</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
