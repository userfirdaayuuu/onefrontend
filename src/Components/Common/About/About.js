// src/pages/About.jsx
import React from "react";
import "./About.css";
import BackButton from "../Back/BackButton";

const About = () => {
  return (
    <>
    <div className="button-back">
        <BackButton />
    </div>
    <div className="about-container">
      <h1 className="about-title">Tentang El-Gizer</h1>
      <p className="about-paragraph">
        <strong>Selamat datang di El-Gizer!</strong><br />
        El-Gizer adalah platform e-learning internal yang dirancang khusus untuk siswa <strong>Bimbel El-Gizer</strong>. 
        Di sini, kamu bisa belajar secara fleksibel, mandiri, dan tetap terhubung dengan tutor-tutor terbaik kami.
      </p>

      <h2 className="about-section-title">🎯 Visi Kami</h2>
      <p className="about-paragraph">
        Mendukung proses belajar siswa secara digital tanpa mengurangi kualitas bimbingan. 
        Kami ingin kamu tetap bisa berkembang — kapan saja, di mana saja.
      </p>

      <h2 className="about-section-title">💡 Apa yang Bisa Kamu Lakukan di El-Gizer?</h2>
      <ul className="about-list">
        <li>Mengakses materi pembelajaran sesuai kursus yang kamu ikuti</li>
        <li>Menonton video penjelasan dari tutor</li>
        <li>Mendownload dokumen dan latihan soal</li>
        <li>Mengikuti jadwal belajar dengan lebih tertata</li>
      </ul>

      <h2 className="about-section-title">📌 Untuk Siapa El-Gizer Ini?</h2>
      <p className="about-paragraph">
        Platform ini <strong>khusus untuk siswa Bimbel El-Gizer</strong>, dan tidak terbuka untuk publik. 
        Jadi, semua konten dan materi yang ada di sini <em>dipersonalisasi hanya untuk kamu</em>.
      </p>

      <h2 className="about-section-title">👥 Siapa yang Mengelola?</h2>
      <p className="about-paragraph">
        El-Gizer dikembangkan oleh tim IT internal Bimbel El-Gizer, bekerja sama dengan para tutor dan admin. 
        Semua fitur dan materi terus diperbarui untuk mendukung proses belajar kamu.
      </p>

      <h2 className="about-section-title">📬 Butuh Bantuan?</h2>
      <p className="about-contact">
        Hubungi admin atau tutor melalui grup belajar kamu, atau kirim email ke: <br />
        📩 <a href="mailto:support@bimbelelgizer.id">support@bimbelelgizer.id</a>
      </p>
    </div>
    </>
  );
};

export default About;
