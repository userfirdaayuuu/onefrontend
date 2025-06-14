import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../../Style/CourseDetail.css';
import BackButton from "../../Common/Back/BackButton";
import AuthServices from "../../../Auth/AuthServices";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";


const CourseDetail = () => {
  const { id } = useParams();
  const [kursus, setKursus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();


  useEffect(() => {
  const fetchData = async () => {
    try {
      const [userData, kursusData] = await Promise.all([
        AuthServices.getUserProfile(),
        AuthServices.getKursusDetail(id),
      ]);
      setUser(userData);
      setKursus(kursusData);
    } catch (error) {
      console.error("Gagal mengambil data:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, [id, location.search]); // ← perhatikan ini


  if (loading) return <p className="loading-text">Loading...</p>;
  if (!kursus) return <p className="error-text">Kursus tidak ditemukan.</p>;

  return (
    <div className="course">
      <div className="header-detail">
        <BackButton />
      {user?.role === 'admin' && (
        <div className="buttonedit">
          <Button 
            className="edit"
            onClick={() => navigate(`/courseadmin/edit/${id}`)}>
            Edit
          </Button>
        </div>
      )}
      </div>

      <div className="course-detail-container">
      <h1 className="course-title">Kursus {kursus.nama_kursus}</h1>

      <div className="detail-info">
        <p> 💬 <strong>Deskripsi:</strong> {kursus.deskripsi || '-'}</p>
        <p> ⏱️ <strong>Durasi:</strong> {kursus.durasi || '-'}</p>
        <p> 📚 <strong>Modul:</strong> {kursus.modul || '-'}</p>
        <p> 🗓️ <strong>Jadwal:</strong> {kursus.jadwal || '-'}</p>
        <p> 🧑‍🏫 <strong>Tutor:</strong> {kursus.nama_tutor || 'Tidak tersedia'}</p>
      </div>
      </div>
      
    </div>
  );
};

export default CourseDetail;
