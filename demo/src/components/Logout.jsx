import React from "react";
import Sidebar from "./Sidebar";
import "./Logout.css";
import { FaSignOutAlt, FaTimes } from "react-icons/fa";

export default function Logout({ onLogout, onCancel }) {
  return (
    <>
      <Sidebar />
      <div className="logout-container">
        <div className="logout-card">
          <h2>Are you sure you want to logout?</h2>
          <div className="logout-buttons">
            <button className="logout-btn" onClick={onLogout}>
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
