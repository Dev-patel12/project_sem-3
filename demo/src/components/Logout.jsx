import React from "react";
import Sidebar from "./Sidebar";
import "./Logout.css";
import { FaSignOutAlt, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Logout({ onLogout, onCancel }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (onLogout) {
      onLogout(); // Call parent logout logic, like clearing auth
    }
    navigate("/"); // Redirect to login page
  };

  return (
    <>
      <Sidebar />
      <div className="logout-container">
        <div className="logout-card">
          <h2>Are you sure you want to logout?</h2>
          <div className="logout-buttons">
            <button className="logout-btn" onClick={handleLogout}>
              <FaSignOutAlt className="icon" /> Logout
            </button>
            <button className="cancel-btn" onClick={onCancel}>
              <FaTimes className="icon" /> Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
