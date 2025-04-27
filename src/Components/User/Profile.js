import React from "react";
import "./Profile.css";
import { student } from "../.././Assets/Index";

const Profile = () => {
    return (
        <div className="profile-container">
            <div className="profile-left">
                <div className="avatar-box">
                    <img src={student.avatar} alt="Avatar" className="profile-avatar" />
                </div>
                <div className="profile-info">
                    <p>Nama: {student.nama}</p>
                    <p>No HP: {student.noHp}</p>
                    <p>Kelas: {student.kelas}</p>
                </div>
            </div>

            <div className="profile-right">
                <h2 className="profile-title">Kursus yang di ikuti</h2>
                <div className="profile-courses">
                    {student.kursus.map((course, index) => (
                        <div key={index} className="course-card">
                            {course}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Profile;
