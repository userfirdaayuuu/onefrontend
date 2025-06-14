import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import "./Landing.css";
import { assets } from "../../../Assets/Index";

const LandingPage = () => {
  const navigate = useNavigate();

//   setTimeout(() => {
//   navigate("/role-selection");
// }, 20000); 

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/role-selection");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="landing-wrapper">
      <img src={assets.logobimbel2} alt="Logo" className="landing-logo" />

      <h1 className="landing-title">
        <Typewriter
          words={[
            "Selamat Datang di El-Gizer 🎓",
            // "Tempat Belajar Online 📘",
            // "Bersama Kita Bisa! 🚀",
          ]}
          loop={1} // infinite loop = 0, or set 1 to show once
          cursor
          cursorStyle="|"
          typeSpeed={50}
          deleteSpeed={40}
          delaySpeed={1000}
        />
      </h1>
    </div>
  );
};

export default LandingPage;
