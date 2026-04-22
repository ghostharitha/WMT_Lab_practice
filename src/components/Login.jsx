import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage("");
    setError("");

    const existingUsers = JSON.parse(localStorage.getItem("vehicleSaleUsers") || "[]");

    const foundUser = existingUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (!foundUser) {
      setError("Invalid email or password.");
      return;
    }

    localStorage.setItem("vehicleSaleCurrentUser", JSON.stringify(foundUser));
    setMessage(`Welcome back, ${foundUser.fullName}! Redirecting to home page...`);

    setTimeout(() => {
      navigate("/home");
    }, 1000);
  };

  return (
    <div className="card">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>

      {error && <p className="error">{error}</p>}
      {message && <p className="success">{message}</p>}

      <p className="switch-link">
        New user? <Link to="/register">Create an account</Link>
      </p>
    </div>
  );
}
