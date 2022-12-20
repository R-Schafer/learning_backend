import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./componenents/Login";
import Signup from "./componenents/Signup";
import Home from "./componenents/Home";

// buttons
const loginBtn = document.querySelector(".login-btn");
const googleLoginBtn = document.querySelector(".google-login-btn");
const signupBtn = document.querySelector(".signup-btn");
const logoutBtn = document.querySelector(".logout-btn");
const deleteBtn = document.querySelector(".delete-btn");
const tweetBtn = document.querySelector(".tweet-btn");

function App() {
  return (
    <div className="h-100 w-100">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
