import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiLogIn, BiShow, BiHide, BiShieldQuarter } from "react-icons/bi";
import "./AdminLogin.css";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const validate = () => {
    if (!email.trim() || !password.trim()) {
      setError("All fields are required.");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a valid email address.");
      return false;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!validate()) return;

    setLoading(true);
    try {
      await new Promise((res) => setTimeout(res, 800));
      const mockAdminEmail = "admin@example.com";
      const mockAdminPassword = "admin123";

      if (email === mockAdminEmail && password === mockAdminPassword) {
        localStorage.setItem("adminAuth", JSON.stringify({ email }));
        navigate("/admin/dashboard");
      } else {
        setError("Invalid admin credentials.");
      }
    } catch (err) {
      setError("Login failed. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-overlay" />
      <div className="admin-login-card">
        <div className="brand">
          <div className="brand-icon">
            <BiShieldQuarter className="icon-brand" />
          </div>
          <h2>Admin Panel</h2>
          <p className="subtitle">Secure access only</p>
        </div>

        {error && <div className="alert-error">{error}</div>}

        <form onSubmit={handleSubmit} noValidate>
          {/* Email */}
          <label htmlFor="adminEmail" className="field-label">Admin Email</label>
          <div className="field-wrapper">
            <input
              id="adminEmail"
              type="email"
              placeholder="admin@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              autoComplete="username"
              required
            />
          </div>

          {/* Password */}
          <label htmlFor="adminPassword" className="field-label">Password</label>
          <div className="field-wrapper password-wrapper">
            <input
              id="adminPassword"
              type={showPw ? "text" : "password"}
              placeholder="•••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
              autoComplete="current-password"
              required
            />
            <button
              type="button"
              className="toggle-pw"
              onClick={() => setShowPw((p) => !p)}
              aria-label={showPw ? "Hide password" : "Show password"}
              disabled={loading}
            >
              {showPw ? <BiHide className="icon-toggle" /> : <BiShow className="icon-toggle" />}
            </button>
          </div>

          <button type="submit" className="btn-admin-login" disabled={loading}>
            {loading ? <span className="spinner" /> : <BiLogIn className="icon-login" />}
            <span>{loading ? "Signing in..." : "Login"}</span>
          </button>
        </form>

        <div className="helper-text">
          <small>
            Forgot password? <a href="#reset" onClick={(e) => e.preventDefault()}>Contact Super Admin</a>
          </small>
        </div>
      </div>
    </div>
  );
}
