import React from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "./Home.css";

export default function Home() {
  const location = useLocation();
  const name = location.state?.name || "Unknown Student";

  return (
    <>
      <Sidebar />
      <div className="home-container">
        <div className="home-content">
          <h1>Welcome, {name}</h1>
          <p className="subtitle">
            You're now logged in to the <strong>Student Grievance Redressal System</strong>.
          </p>

          {/* Feature Cards */}
          <div className="features">
            <div className="feature-card">
              <h4>📨 Easy Submission</h4>
              <p>Raise any issue or concern directly from your dashboard.</p>
            </div>
            <div className="feature-card">
              <h4>📊 Track Progress</h4>
              <p>View real-time updates on the status of your complaints.</p>
            </div>
            <div className="feature-card">
              <h4>🔒 Secure & Private</h4>
              <p>Your identity and data are fully protected within the system.</p>
            </div>
          </div>

          <p className="quote">
            “Raising your voice is the first step toward positive change.”
          </p>
        </div>
      </div>
    </>
  );
}
