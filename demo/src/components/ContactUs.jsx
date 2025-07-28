import React, { useState } from "react";
import "./ContactUs.css";
import Sidebar from "./Sidebar";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${name}. We will contact you soon!`);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <Sidebar />
      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Contact Us</h2>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </>
  );
}
