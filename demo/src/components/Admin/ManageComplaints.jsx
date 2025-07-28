import React from "react";
import AdminSidebar from "./AdminSidebar";
import "./ManageComplaints.css";

export default function ManageComplaints() {
  const complaints = [
    { id: 1, user: "Rahul Sharma", issue: "Login not working", status: "Open" },
    { id: 2, user: "Neha Verma", issue: "App crash on submit", status: "In Progress" },
    { id: 3, user: "Amit Patel", issue: "Unable to upload document", status: "Resolved" },
    { id: 4, user: "Priya Singh", issue: "Password reset email not received", status: "Open" },
  ];

  return (
    <div className="manage-complaints-page">
      <AdminSidebar />
      <div className="manage-complaints-content">
        <h1>Manage Complaints</h1>
        <div className="complaints-table-container">
          <table className="complaints-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>User</th>
                <th>Issue</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {complaints.map((complaint) => (
                <tr key={complaint.id}>
                  <td data-label="ID">{complaint.id}</td>
                  <td data-label="User">{complaint.user}</td>
                  <td data-label="Issue">{complaint.issue}</td>
                  <td data-label="Status">{complaint.status}</td>
                  <td data-label="Actions">
                    <button className="resolve-btn">Resolve</button>
                    <button className="delete-btn">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
