import { Navigate, Route, Routes, Link } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Vehicles from "./components/Vehicles";

export default function App() {
  return (
    <div className="app-shell">
      <div className="content-wrapper">
        <h1>Vehicle Sale Portal</h1>
        <p className="subtitle">Buy and sell vehicles with ease.</p>

        <nav className="top-nav">
          <Link to="/home">Home</Link>
          <Link to="/vehicles">Vehicles</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
}
