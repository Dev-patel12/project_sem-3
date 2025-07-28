import React from "react";
import "./StudentProfile.css";
import Sidebar from "../components/Sidebar";

export default function StudentProfile() {
  const profileImg = "https://randomuser.me/api/portraits/men/32.jpg";

  const student = {
    name: "Dev Patel",
    email: "devpatel@example.com",
    studentId: "STU123456",
    department: "Computer Science",
  };

  return (
    <>
      <Sidebar />
      <div className="profile-page">
        <div className="profile-card">
          <div className="profile-header">
            <img src={profileImg} alt="Student" className="profile-img" />
            <h3>{student.name}</h3>
            <p className="department">{student.department}</p>
          </div>
          <hr />
          <div className="profile-details">
            <p><strong>Email:</strong> {student.email}</p>
            <p><strong>Student ID:</strong> {student.studentId}</p>
            <p><strong>Department:</strong> {student.department}</p>
          </div>
        </div>
      </div>
    </>
  );
}
