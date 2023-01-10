import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./componenents/Login";
import Signup from "./componenents/Signup";
import Home from "./componenents/Home";

function App() {
  return (
    <div className="h-100 w-100">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
