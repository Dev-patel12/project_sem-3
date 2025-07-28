import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SubmitComplaint from "./components/SubmitComplaint";
import MyComplaints from "./components/MyComplaints";
import FeedbackForm from "./components/FeedbackForm";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Login from "./components/Login";
import Register from "./components/Register";
import StudentProfile from "./components/StudentProfile"
import Logout from "./components/Logout";
import "./App.css";


//admin
import AdminLogin from "./components/Admin/AdminLogin";
import AdminDashboard from "./components/Admin/AdminDashboard";
import ManageUsers from "./components/Admin/ManageUsers";
import ManageComplaints from "./components/Admin/ManageComplaints";
import ManageFeedback from "./components/Admin/ManageFeedback";
// import AdminLogout from "./components/Admin/AdminLogout";

function App() {
  const isAdminLoggedIn = localStorage.getItem("adminAuth"); 
  return (
    <Router>
      <div className="app-container">
     

        {/* Main Content */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/submit-complaint" element={<SubmitComplaint />} />
            <Route path="/my-complaints" element={<MyComplaints />} />
            <Route path="/feedback" element={<FeedbackForm />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/profile" element={<StudentProfile />} />
            <Route path="/logout" element={<Logout/>}/>

              {/* admin */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/users" element={<ManageUsers />} />
            <Route path="/admin/complain" element={<ManageComplaints />} />
            <Route path="/admin/feedback" element={<ManageFeedback />} />
            {/* <Route path="/admin/logout" element={<AdminLogout />} /> */}

        {/* Fallback */}
        <Route path="*" element={<h2 style={{ textAlign: "center", marginTop: "50px" }}>404 - Page Not Found</h2>} />
            

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
