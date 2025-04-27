import React from "react";
import "./About.css"; 
import Tutor from "../ProfileTutor/Tutor";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">Tentang El-Gizer</h1>
        
        <p className="about-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam malesuada sit amet orci ac semper. Aenean est odio, hendrerit id justo at, rhoncus ultricies nibh. Fusce ut vehicula quam, eget euismod sapien. Quisque varius posuere finibus. Curabitur convallis neque vel nunc interdum molestie. Cras porttitor fringilla tempor. Cras pulvinar nulla id ipsum sagittis dignissim. Maecenas eros sapien, aliquam eget leo eget, faucibus porta nunc. 
        </p>

        {/* Fitur Utama */}
        <div className="features">
        <h2 className="features-title">Fitur Utama</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>📚 Kursus Interaktif</h3>
            <p>Akses materi video, latihan soal, dan kuis interaktif kapan saja.</p>
          </div>
          <div className="feature-card">
            <h3>💬 Forum Diskusi</h3>
            <p>Berdiskusi dengan tutor dan teman sekelas dalam satu platform.</p>
          </div>
          <div className="feature-card">
            <h3>✅ Evaluasi & Ujian</h3>
            <p>Latih pemahamanmu dengan ujian online dan hasil instan.</p>
          </div>
          <div className="feature-card">
            <h3>📱 Akses Fleksibel</h3>
            <p>Belajar dari mana saja, kapan saja, melalui perangkat apa pun.</p>
          </div>
        </div>
        </div>

        <Tutor />

        {/* Call to Action */}
        <Link to="/daftar">
        <button className="button">Gabung Sekarang</button>
        </Link>
        
      </div>
    </div>
  );
};

export default About;
