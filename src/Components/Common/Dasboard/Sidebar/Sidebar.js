import React, { useEffect, useRef } from "react";
import '../../../Style/sidebarstyle.css';
import { assets } from '../../../../Assets/Index';
import { Link } from 'react-router-dom';

const Sidebar = ({ show, onClose }) => {
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
        <li><Link to="/dashboard-siswa">dashboard siswa</Link></li>
        <li><Link to="/course-material">kursus</Link></li>
    </ul> 
    </div>
  );
};

export default Sidebar;
