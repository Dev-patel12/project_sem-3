import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { BiLogIn } from "react-icons/bi";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/home", { state: { email } });
  };

  return (
    <div className="l1">
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="text-center mb-4">Login</h2>

        {/* Email */}
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="loginEmail"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="loginEmail">Email address</label>
        </div>

        {/* Password */}
        <div className="form-floating mb-4">
          <input
            type="password"
            className="form-control"
            id="loginPassword"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor="loginPassword">Password</label>
        </div>

        {/* Submit */}
        <button
          className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2"
          type="submit"
        >
          <BiLogIn size={20} />
          <span>Login</span>
        </button>

        <p className="text-center mt-3 text-muted">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </form>
    </div>
    </div>
  );
}
