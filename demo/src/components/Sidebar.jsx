import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaPlusCircle,
  FaCommentDots,
  FaClipboardList,
  FaSignOutAlt,
  FaBars,
  FaUser,
  FaTimes,
  FaInfoCircle,
  FaEnvelope,
} from "react-icons/fa";
import "./Sidebar.css";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Toggle Button for Mobile */}
      <div className="sidebar-toggle">
        <button className="toggle-btn" onClick={toggleSidebar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <h2 className="sidebar-title">Student Panel</h2>
        <ul className="sidebar-menu">
          <li>
            <Link to="/home">
              <FaHome className="icon" /> Home
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <FaUser className="icon" /> Profile
            </Link>
          </li>
          <li>
            <Link to="/submit-complaint">
              <FaPlusCircle className="icon" /> Submit Complaint
            </Link>
          </li>
          <li>
            <Link to="/my-complaints">
              <FaClipboardList className="icon" /> My Complaints
            </Link>
          </li>
          <li>
            <Link to="/feedback">
              <FaCommentDots className="icon" /> Feedback
            </Link>
          </li>
          <li>
            <Link to="/about-us">
              <FaInfoCircle className="icon" /> About Us
            </Link>
          </li>
          <li>
            <Link to="/contact-us">
              <FaEnvelope className="icon" /> Contact Us
            </Link>
          </li>
          <li className="logout">
            <Link to="/logout">
              <FaSignOutAlt className="icon" /> Logout
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
