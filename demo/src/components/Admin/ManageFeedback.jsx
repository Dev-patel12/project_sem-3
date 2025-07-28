import React from "react";
import AdminSidebar from "./AdminSidebar";
import "./ManageFeedback.css";

export default function ManageFeedback() {
  const feedbacks = [
    { id: 1, user: "Rahul Sharma", message: "Great app!", rating: 5 },
    { id: 2, user: "Neha Verma", message: "Needs improvements in UI.", rating: 3 },
    { id: 3, user: "Amit Patel", message: "Support team was helpful.", rating: 4 },
    { id: 4, user: "Priya Singh", message: "Bugs in complaint submission.", rating: 2 },
  ];

  return (
    <div className="manage-feedback-page">
      <AdminSidebar />
      <div className="manage-feedback-content">
        <h1>Manage Feedback</h1>
        <div className="feedback-table-container">
          <table className="feedback-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>User</th>
                <th>Feedback</th>
                <th>Rating</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {feedbacks.map((feedback) => (
                <tr key={feedback.id}>
                  <td data-label="ID">{feedback.id}</td>
                  <td data-label="User">{feedback.user}</td>
                  <td data-label="Feedback">{feedback.message}</td>
                  <td data-label="Rating">{feedback.rating}</td>
                  <td data-label="Actions">
                    <button className="reply-btn">Reply</button>
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
