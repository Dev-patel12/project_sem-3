import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import { BiUserPlus } from "react-icons/bi";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, studentId, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Registration successful!");
        setName("");
        setEmail("");
        setStudentId("");
        setPassword("");
      } else {
        alert(`Error: ${data.message || "Registration failed."}`);
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("Server error. Please try again later.");
    }
  };

  return (
    <div className="register-container">
      <form className="register-form animate" onSubmit={handleSubmit}>
        <h2 className="text-center mb-4">Register</h2>

        {/* Full Name */}
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="name">Full Name</label>
        </div>

        {/* Email */}
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="email">Email address</label>
        </div>

        {/* Student ID */}
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="studentId"
            placeholder="Student ID"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            required
          />
          <label htmlFor="studentId">Student ID</label>
        </div>

        {/* Password */}
        <div className="form-floating mb-4">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor="password">Password</label>
        </div>

        {/* Submit Button */}
        <button
          className="btn btn-success w-100 d-flex align-items-center justify-content-center gap-2"
          type="submit"
        >
          <BiUserPlus size={20} />
          <span>Register</span>
        </button>

        <p className="text-center mt-3 text-muted">
          Already have an account? <Link to="/">Login here</Link>
        </p>
      </form>
    </div>
  );
}
