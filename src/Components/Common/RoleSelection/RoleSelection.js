import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaChalkboardTeacher, FaUserGraduate, FaUserFriends } from "react-icons/fa";
import './RoleSelection.css';
import { useNavigate } from "react-router-dom";

const roles = [
  {
    title: "Tutor",
    icon: <FaChalkboardTeacher style={{ color: "#00CFE8", fontSize: "45px" }} />,
    routeRole: "tutor",
  },
  {
    title: "Siswa",
    icon: <FaUserGraduate size={60} style={{ color: "#00CFE8", fontSize: "45px" }}/>,
    routeRole: "siswa",
  },
  {
    title: "Admin",
    icon: <FaUserFriends size={60} style={{ color: "#00CFE8", fontSize: "45px" }}/>,
    routeRole: "admin",
  },
];

const RoleSelection = () => {
  const navigate = useNavigate();

  const handleSelect = (routeRole) => {
    navigate(`/register/${routeRole}`);
  };

  return (
    <div className="role-selection-wrapper">
      <div className="role-selection-grid">
        <div className="role-selection-title">
          <h3>Daftar sebagai...</h3>
        </div>
        <div className="role-card-list">
          {roles.map((role, index) => (
            <div
              key={index}
              className="role-card"
              onClick={() => handleSelect(role.routeRole)}
            >
              <div className="role-icon">{role.icon}</div>
              <h5 className="role-title">{role.title}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
