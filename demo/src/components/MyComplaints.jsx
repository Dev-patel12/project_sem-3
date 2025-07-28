import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MyComplaints.css";
import Sidebar from "../components/Sidebar";

export default function MyComplaints() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const mockData = [
      {
        id: 1,
        subject: "Wi-Fi not working",
        category: "Hostel",
        status: "Pending",
        date: "2025-07-12",
      },
      {
        id: 2,
        subject: "Exam schedule confusion",
        category: "Academic",
        status: "Resolved",
        date: "2025-07-10",
      },
    ];
    setComplaints(mockData);
  }, []);

  return (
    <>
      <Sidebar />
      <div className="complaints-container">
        <div className="complaints-wrapper">
          <h2 className="complaints-title">My Complaints</h2>
          <div className="table-responsive">
            <table className="table table-hover table-bordered align-middle text-center">
              <thead className="table-header">
                <tr>
                  <th>#</th>
                  <th>Subject</th>
                  <th>Category</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {complaints.map((c, index) => (
                  <tr key={c.id}>
                    <td>{index + 1}</td>
                    <td className="text-break">{c.subject}</td>
                    <td>{c.category}</td>
                    <td>
                      <span
                        className={`status-badge ${
                          c.status === "Resolved" ? "resolved" : "pending"
                        }`}
                      >
                        {c.status}
                      </span>
                    </td>
                    <td>{c.date}</td>
                  </tr>
                ))}
                {complaints.length === 0 && (
                  <tr>
                    <td colSpan="5" className="no-data">
                      No complaints found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
