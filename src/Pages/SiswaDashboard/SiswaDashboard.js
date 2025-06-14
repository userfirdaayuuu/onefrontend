import React, { useState } from "react";
import './SiswaDashboard.css';
import SiswaSidebar from "./SiswaSidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import CourseCard from "../../Components/Siswa/CourseCard/CourseCard";
import ProfileDropdown from "../../Components/Common/Dasboard/ProfileDropdown/ProfileDropdown";
import DashboardHero from "../../Components/Common/DashboardHero/DashboardHero"

const SiswaDashboard = () => {
  const [showNav, setShowNav] = useState(false);

  const tonggleSidebar = () => {
    setShowNav(prev => !prev);
  }

  return (
    <div className="layout">
      
       {/* Overlay saat sidebar aktif */}
      {showNav && <div className="overlay" onClick={() => setShowNav(false)}></div>}
      
      {/* sidebar */}
      <SiswaSidebar show={showNav} onClose={() => setShowNav(false)} />

      {/* GiHamburgerMenu */}
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

export default SiswaDashboard;