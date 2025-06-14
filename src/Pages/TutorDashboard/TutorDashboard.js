import React, { useState } from "react";
import TutorSidebar from "../TutorDashboard/TutorSidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import CourseCard from "../../Components/Siswa/CourseCard/CourseCard";
import DashboardHero from "../../Components/Common/DashboardHero/DashboardHero";
import ProfileDropdown from "../../Components/Common/Dasboard/ProfileDropdown/ProfileDropdown";
import '../../Components/Style/Dashboardstyle.css';

const TutorDashboard = () => {
  const [showNav, setShowNav] = useState(false);

  const tonggleSidebar = () => {
    setShowNav(prev => !prev);
  }

  return (
    <div className="layout">
      
      {showNav && <div className="overlay" onClick={() => setShowNav(false)}></div>}
      
      <TutorSidebar show={showNav} onClose={() => setShowNav(false)} />

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

export default TutorDashboard;