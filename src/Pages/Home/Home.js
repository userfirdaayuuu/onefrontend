import React from "react";
import { useState } from "react";
// import '../../Components/Headbar/Headbar.css';
import './Home.css';
import Sidebar from '../../Components/Siswa/Dasboard/Sidebar/Sidebar';
// import Course from "../../Components/Course/Course";
import Header from '../../Components/Siswa/Dasboard/Header/Header';
// import NewCourse from '../../Components/Siswa/Dasboard/NewCourse/NewCourse';
import { GiHamburgerMenu } from "react-icons/gi";
// import { FaCircleUser } from "react-icons/fa6";
import BeforeProfileDropdown from '../../Components/Siswa/Dasboard/BeforeProfileDropdown/BeforeProfileDropdown';
import AfterProfileDropdown from "../../Components/Siswa/Dasboard/AfterProfielDropdown/AfterProfileDropdown";
import UICardBaru from "../../Components/UIGrid/UICardbaru";
// import { Link } from "react-router-dom";

const Home = () => {
    const [showNav, setShowNav] = useState(false);
    return (
        <div className="main-content">
        <header>
            <GiHamburgerMenu onClick={() => setShowNav(!showNav)}/>
            {/* <Link to="/login">
            <FaCircleUser />
        </Link> */}
        {/* <BeforeProfileDropdown /> */}
        <AfterProfileDropdown />
        </header>

        <Sidebar show={showNav} />
        <div className={showNav ? "main-content shifted" : "main-content"}>
        <Header />
        {/* <Course /> */}
        {/* <NewCourse /> */}
        <UICardBaru />
        </div>        
        </div>
    )
}

export default Home;