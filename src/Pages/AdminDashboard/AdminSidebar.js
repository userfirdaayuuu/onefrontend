import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import '../../Components/Style/sidebarstyle.css';
import { assets } from "../../Assets/Index";


const AdminSidebar = ({ show, onClose }) => {
  const sidebarRef = useRef();
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
          onClose();
        }
      };
  
      if (show) {
        document.addEventListener("mousedown", handleClickOutside);
      }

      return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show, onClose]);

  return (
    <div ref={sidebarRef} className={`sidebar ${show ? 'active' : ''}`}>
    <img src={assets.logobimbel2} alt="logo" className="logo" />
      <ul>
        <li><Link to="/about">Tentang Kami</Link></li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
