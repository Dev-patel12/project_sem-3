// import React from "react";
// import { useNavigate } from "react-router-dom";
// import AdminSidebar from "./AdminSidebar";
// import "./AdminLogout.css";

// export default function AdminLogout() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // Clear any auth tokens or session storage
//     localStorage.removeItem("adminToken");
//     navigate("/"); // Redirect to homepage or login
//   };

//   return (
//     <div className="admin-logout-page">
//       <AdminSidebar />
//       <div className="admin-logout-content">
//         <div className="logout-card">
//           <h2>Are you sure you want to logout?</h2>
//           <div className="logout-buttons">
//             <button className="cancel-btn" onClick={() => navigate(-1)}>
//               Cancel
//             </button>
//             <button className="logout-btn" onClick={handleLogout}>
//               Logout
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
