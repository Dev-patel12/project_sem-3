// src/components/SubmitComplaint.jsx
import React, { useState } from "react";
import "./SubmitComplaint.css";
import axios from "axios"; 
import { FaPaperPlane } from "react-icons/fa";
import Sidebar from "../components/Sidebar";

export default function SubmitComplaint() {
    const [subject, setSubject] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData();
        formData.append("subject", subject);
        formData.append("category", category);
        formData.append("description", description);
        if (file) formData.append("file", file);

        try {
            const res = await axios.post("http://localhost:5000/api/complaints/submit", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    // Uncomment if you're using token-based auth
                    // Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });

            alert("✅ Complaint submitted successfully!");
            console.log("Backend response:", res.data);

            // Reset form
            setSubject("");
            setCategory("");
            setDescription("");
            setFile(null);
        } catch (error) {
            console.error("❌ Submission error:", error);
            alert("Failed to submit complaint. Try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Sidebar />
            <div className="submit-container">
                <div className="animated-form">
                    <h2 className="form-title">Submit a Complaint</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                className="form-control"
                                placeholder="Enter complaint subject"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="category">Category</label>
                            <select
                                id="category"
                                className="form-select"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                required
                            >
                                <option value="">Select a category</option>
                                <option value="Academic">Academic</option>
                                <option value="College">College</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea
                                id="description"
                                className="form-control"
                                rows="5"
                                placeholder="Describe your issue in detail"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            ></textarea>
                        </div>

                        <div className="form-group">
                            <label htmlFor="file">Attach File (optional)</label>
                            <input
                                type="file"
                                className="form-control"
                                id="file"
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                        </div>

                        <div className="submit-btn-wrapper">
                            <button type="submit" className="btn-submit" disabled={loading}>
                                {loading ? "Submitting..." : <><FaPaperPlane /> Submit Complaint</>}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
