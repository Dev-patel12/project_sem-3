import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTachometerAlt, FaUsers, FaComments, FaClipboardList, FaSignOutAlt } from "react-icons/fa";
import "./AdminSidebar.css";

export default function AdminSidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button className="hamburger-btn" onClick={toggleSidebar}>
        ☰
      </button>

      {/* Sidebar */}
      <aside className={`admin-sidebar ${sidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleSidebar}>✖</button>
        <h2>Admin Panel</h2>
        <ul>
          <li onClick={() => navigate("/admin/dashboard")}>
            <FaTachometerAlt className="menu-icon" /> Dashboard
          </li>
          <li onClick={() => navigate("/admin/users")}>
            <FaUsers className="menu-icon" /> Manage Users
          </li>
          <li onClick={() => navigate("/admin/complain")}>
            <FaClipboardList className="menu-icon" /> Complaints
          </li>
          <li onClick={() => navigate("/admin/feedback")}>
            <FaComments className="menu-icon" /> Feedback
          </li>
          {/* <li onClick={() => navigate("/admin/logout")}>
            <FaSignOutAlt className="menu-icon" /> Logout
          </li> */}
        </ul>
      </aside>
    </>
  );
}
