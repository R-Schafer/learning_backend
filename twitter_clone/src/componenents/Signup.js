import React, { useState } from "react";
import Icons from "../SVGs/Icons";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "./firebase";

function Signup() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [handle, setHandle] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [existingEmail, setExistingEmail] = useState(false);

  const [nameIsValid, setNameIsValid] = useState(true);
  const [usernameIsValid, setUsernameIsValid] = useState(true);
  const [handleIsValid, setHandleIsValid] = useState(true);
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);

  const navigate = useNavigate();

  // validating the users input information
  function validateInputs() {
    const nameRegex = /^[a-zA-Z ]{1,60}$/;
    const usernameRegex = /^(?=.*\w)[\w ]{5,15}$/;
    const handleRegex = /^@(?=.*\w)[\w]{5,15}$/;
    const emailRegex = /^\S+@[a-zA-z]+\.[a-zA-z]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d ]{8,50}$/;

    const validName = nameRegex.test(name);
    const validUsername = usernameRegex.test(username);
    const validHandle = handleRegex.test(handle);
    const validEmail = emailRegex.test(email);
    const validPassword = passwordRegex.test(password);

    setNameIsValid(validName);
    setUsernameIsValid(validUsername);
    setHandleIsValid(validHandle);
    setEmailIsValid(validEmail);
    setPasswordIsValid(validPassword);

    return (
      validName && validUsername && validHandle && validEmail && validPassword
    );
  }

  function handleSignup() {
    if (validateInputs()) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((currentUserCredential) => {
          addNewUserToFirestore();
          navigate("/home");
        })
        .catch((error) => {
          setExistingEmail(true);
        });

      async function addNewUserToFirestore() {
        try {
          await setDoc(doc(db, "users", email), {
            name: name,
            username: username,
            handle: handle,
            email: email,
            password: password,
            tweets: {},
          });
        } catch (e) {
          const errorMessage = "couldn't add user to firestore";
          alert(errorMessage);
        }
      }
    }
  }

  return (
    <div className="container-xxxl h-100 d-flex flex-column justify-content-center">
      <div className="row justify-content-center">
        <div className="col-10 col-md-4 col-lg-4 col-xl-3 bg-dark rounded-3 text-center p-3">
          <Icons type="logo" />
          <h1 className="text-light">Join Clone</h1>
          <form>
            {/* ------------------ name ------------------ */}
            <div className="input-group mt-3">
              <input
                type="text"
                name="name"
                className="form-control bg-dark text-light"
                placeholder="Name"
                aria-label="Name"
                aria-describedby="basic-addon1"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="text-danger">
              {nameIsValid ? "" : "Letters only"}
            </div>
            {/* ------------------ username ------------------ */}
            <div className="input-group mt-3">
              <input
                type="text"
                name="username"
                className="form-control bg-dark text-light"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="text-danger">
              {usernameIsValid ? "" : "Must be 5-15 characters"}
            </div>
            {/* ------------------ handle ------------------ */}
            <div className="input-group mt-3">
              <input
                type="text"
                name="handle"
                className="form-control bg-dark text-light"
                placeholder="@handle"
                aria-label="Handle"
                aria-describedby="basic-addon1"
                onChange={(e) => setHandle(e.target.value)}
              />
            </div>
            <div className="text-danger">
              {handleIsValid ? "" : "Must begin with @, 5-15 characters"}
            </div>
            {/* ------------------ email ------------------ */}
            <div className="input-group mt-3">
              <input
                type="email"
                name="email"
                className="form-control bg-dark text-light"
                placeholder="Email"
                aria-label="Email"
                aria-describedby="basic-addon1"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="text-danger">
              {emailIsValid ? "" : "Must follow pattern: johndoe@email.com"}
            </div>
            <div className="text-danger">
              {existingEmail ? "Account using this email already exists" : ""}
            </div>
            {/* ------------------ password ------------------ */}
            <div className="input-group mt-3">
              <input
                type="password"
                name="password"
                className="form-control bg-dark text-light"
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon1"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="text-danger">
              {passwordIsValid
                ? ""
                : "Must have 1 capital letter, 1 number, at least 8 characters"}
            </div>
            {/* ------------------ sign up button ------------------ */}
            <div className="d-grid mt-3">
              <button
                className="signup-btn btn btn-outline-* w-100 mx-auto"
                type="button"
                onClick={handleSignup}
              >
                SIGN UP
              </button>
            </div>
          </form>
          {/* ------------------ login ------------------ */}
          <p className="login-link text-light d-flex mt-3 flex-row justify-content-center align-content-center">
            Already have an account?
            <Link to="/" className="ps-2">
              <span>Log In</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
