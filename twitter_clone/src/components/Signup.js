import { useContext, useState } from "react";
import Icons from "../SVGs/Icons";
import { LoginContext } from "../App";
import { Link } from "react-router-dom";
import Loading from "./Loading";

function Signup() {
  const { signup, loading } = useContext(LoginContext);

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

  // validating the users input information
  function validateInputs() {
    const nameRegex = /^[a-zA-Z ]{1,60}$/;
    const usernameRegex = /^(?=.*\w)[\w \W]{5,15}$/;
    const handleRegex = /^(?=.*\w)[\w]{5,15}$/;
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

  async function handleSignup() {
    if (validateInputs()) {
      try {
        await signup(name, username, handle, email, password);
      } catch (error) {
        console.log(error);
        setExistingEmail(true);
      }
    }
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="h-100 d-flex flex-column justify-content-center align-items-center">
      <div className="box bg-dark rounded-3 text-center p-3">
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
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="text-danger">{nameIsValid ? "" : "Letters only"}</div>
          {/* ------------------ username ------------------ */}
          <div className="input-group mt-3">
            <input
              type="text"
              name="username"
              className="form-control bg-dark text-light"
              placeholder="Username"
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
              placeholder="Handle"
              onChange={(e) => setHandle(e.target.value)}
            />
          </div>
          <div className="text-danger">
            {handleIsValid
              ? ""
              : "Letters and numbers only, must be 5-15 characters"}
          </div>
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
  );
}

export default Signup;
