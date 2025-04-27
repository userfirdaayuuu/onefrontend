import React, { useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import "./ProfilDropdown.css";
// import { toast } from 'react-toastfy';

const AfterProfileDropdown = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm("Apakah kamu yakin mau log out?");
    if (confirmLogout) {
      localStorage.removeItem("token"); 
      navigate("/login"); 
    }
  };

  // const handleLogout = () => {
  //   localStorage.removeItem("token");
  //   toast.success('Berhasil Logout!');
  //   setTimeout(() => {
  //     navigate('/login');
  //   }, 2000);
  // }

  return (
    <div className={`profile-dropdown ${open ? "open" : ""}`}>
      <FaCircleUser className="profile-icon" onClick={toggleDropdown} />
      <ul className="dropdown-menu">
        <li><Link to="/profile">Profile</Link></li>
        <li className="logout" onClick={handleLogout}>Logout</li>
      </ul>
    </div>
  );
};

export default AfterProfileDropdown;
