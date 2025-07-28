import React, { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import "./AdminDashboard.css";
import { FiLogOut } from "react-icons/fi"; // Import logout icon

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/admin/login";
  };

  return (
    <div className="admin-dashboard">
      <button className="hamburger-btn" onClick={toggleSidebar}>
        ☰
      </button>

      <AdminSidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="dashboard-content">
        <header className="dashboard-header">
          <h1>Admin Dashboard</h1>
          <FiLogOut className="logout-icon" onClick={handleLogout} title="Logout" />
        </header>

        <section className="dashboard-widgets">
          <div className="widget-card">Total Users: 120</div>
          <div className="widget-card">Complaints: 45</div>
          <div className="widget-card">Feedbacks: 30</div>
        </section>

        <section className="dashboard-section">
          <h2>Recent Activities</h2>
          <ul>
            <li>User Rahul registered</li>
            <li>Complaint #45 resolved</li>
            <li>New feedback from Neha</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
