import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FeedbackForm.css";
import Sidebar from "../components/Sidebar";

export default function FeedbackForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your feedback, ${name}!`);
    // TODO: Send data to backend
  };

  return (
    <>
      <Sidebar />
      <div className="feedback-container">
        <div className="feedback-card">
          <h2 className="feedback-title">Feedback Form</h2>
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Rating */}
            <div className="form-group">
              <label>Rate Us</label>
              <select
                className="form-select"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                required
              >
                <option value="">Choose...</option>
                <option value="Excellent">Excellent</option>
                <option value="Good">Good</option>
                <option value="Average">Average</option>
                <option value="Poor">Poor</option>
              </select>
            </div>

            {/* Feedback */}
            <div className="form-group">
              <label>Your Feedback</label>
              <textarea
                className="form-control"
                rows="4"
                placeholder="Write your feedback here..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                required
              ></textarea>
            </div>

            {/* Submit */}
            <div className="btn-wrapper">
              <button type="submit" className="btn-submit">
                Submit Feedback
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
