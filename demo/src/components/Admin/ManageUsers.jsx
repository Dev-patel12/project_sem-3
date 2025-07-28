import React from "react";
import AdminSidebar from "./AdminSidebar";
import "./ManageUsers.css";

export default function ManageUsers() {
  const users = [
    { id: 1, name: "Rahul Sharma", email: "rahul@example.com", role: "Student" },
    { id: 2, name: "Neha Verma", email: "neha@example.com", role: "Student" },
    { id: 3, name: "Amit Patel", email: "amit@example.com", role: "Admin" },
    { id: 4, name: "Priya Singh", email: "priya@example.com", role: "Student" },
  ];

  return (
    <div className="manage-users-page">
      <AdminSidebar />
      <div className="manage-users-content">
        <h1>Manage Users</h1>
        <div className="users-table-container">
          <table className="users-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td data-label="ID">{user.id}</td>
                  <td data-label="Name">{user.name}</td>
                  <td data-label="Email">{user.email}</td>
                  <td data-label="Role">{user.role}</td>
                  <td data-label="Actions">
                    <button className="edit-btn">Edit</button>
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
