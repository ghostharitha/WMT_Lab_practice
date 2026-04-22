import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setFormData((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage("");
    setError("");

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("vehicleSaleUsers") || "[]");
    const userAlreadyExists = existingUsers.some((user) => user.email === formData.email);

    if (userAlreadyExists) {
      setError("An account already exists for this email.");
      return;
    }

    const updatedUsers = [
      ...existingUsers,
      {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
      },
    ];

    localStorage.setItem("vehicleSaleUsers", JSON.stringify(updatedUsers));
    setMessage("Registration successful. Redirecting to login...");

    setTimeout(() => {
      navigate("/login");
    }, 1200);
  };

  return (
    <div className="card">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <label htmlFor="fullName">Full Name</label>
        <input
          id="fullName"
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          id="confirmPassword"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <button type="submit">Create Account</button>
      </form>

      {error && <p className="error">{error}</p>}
      {message && <p className="success">{message}</p>}

      <p className="switch-link">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}
