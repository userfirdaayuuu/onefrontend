import React, { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import DashboardHero from "../../Components/Common/DashboardHero/DashboardHero";
import CourseCard from "../../Components/Siswa/CourseCard/CourseCard";
import ProfileDropdown from "../../Components/Common/Dasboard/ProfileDropdown/ProfileDropdown";
import '../../Components/Style/Dashboardstyle.css';

const AdminDashboard = () => {
  const [showNav, setShowNav] = useState(false);

  const tonggleSidebar = () => {
    setShowNav(prev => !prev);
  }

  return (
    <div className="layout">
      
      {showNav && <div className="overlay" onClick={() => setShowNav(false)}></div>}
      
      <AdminSidebar show={showNav} onClose={() => setShowNav(false)} />

      <GiHamburgerMenu 
        className="hamburger-icon"
        onClick={tonggleSidebar} 
      />

      <div className="main">
        <header>
          <ProfileDropdown />
        </header>
        <div className="content">
          <DashboardHero />
          <CourseCard />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;