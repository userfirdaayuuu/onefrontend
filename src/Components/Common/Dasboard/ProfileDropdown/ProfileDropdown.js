import React, { useState, useRef, useEffect } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import "./ProfilDropdown.css";


const ProfileDropdown = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm("Apakah kamu yakin mau log out?");
    if (confirmLogout) {
      localStorage.removeItem("token"); 
      localStorage.removeItem("user"); 
      navigate("/login"); 
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`profile-dropdown ${open ? "open" : ""}`} ref={dropdownRef}>
      <FaCircleUser className="profile-icon" onClick={toggleDropdown} />
      {open && (
        <ul className="dropdown-menu">
        <li><Link to="/profile">Profile</Link></li>
        <li className="logout" onClick={handleLogout}>Logout</li>
      </ul>
    )}
    </div>
  );
};

export default ProfileDropdown;