import React from "react";
import "./AboutUs.css";
import Sidebar from "./Sidebar";

export default function AboutUs() {
  return (
    <>
      <Sidebar />
      <div className="about-container">
        <div className="about-content">
          <h1>About Us</h1>
          <p>
            Welcome to our Student Grievance Redressal System. Our mission is to
            provide students with a seamless platform to submit complaints,
            suggestions, and feedback to ensure a better academic environment.
          </p>
          <p>
            This platform is built to promote transparency and improve the
            communication between students and administration.
          </p>
        </div>
      </div>
    </>
  );
}
