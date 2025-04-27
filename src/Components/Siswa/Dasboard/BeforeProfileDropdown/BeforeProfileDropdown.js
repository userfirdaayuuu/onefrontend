import React, { useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./ProfilDropdown.css";

const BeforeProfileDropdown = () => {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  return (
    <div className={`profile-dropdown ${open ? "open" : ""}`}>
      <FaCircleUser className="profile-icon" onClick={toggleDropdown} />
      <ul className="dropdown-menu">
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </div>
  );
};

export default BeforeProfileDropdown;
