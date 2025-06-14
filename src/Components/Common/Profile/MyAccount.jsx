import React, { useEffect, useState } from 'react';
import AuthServices from "../../../Auth/AuthServices";
import './Profile.css';
import BackButton from '../Back/BackButton';
import { Container } from 'react-bootstrap';

const MyAccount = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUserData = async () => {
    try {
      const data = await AuthServices.getUserProfile();
      setUserData(data);
    } catch (error) {
      console.error("Gagal mengambil data user:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!userData) return <p>Data akun tidak ditemukan. Silakan login ulang.</p>;

  return (
    <>
    <div className="button-back">
      <BackButton />
    </div>
    <>
      <h1 className="myaccount-title">Akun Saya</h1>
<hr style={{ margin: "1rem 0", borderTop: "1px solid #eee" }} />

      <Container className="myaccount-card">
        <p><strong>Nama:</strong> {userData.nama}</p>
        <p><strong>Email:</strong> {userData.email}</p>
        <p><strong>Role:</strong> {userData.role}</p>
      

      {userData.role === 'siswa' && (
        <>
          <h2 className="myaccount-subtitle">Kursus yang Diikuti:</h2>
          <ul>
            {userData.kursus_diikuti?.map((kursus) => (
              <li key={kursus._id}>{kursus.namaKursus}</li>
            ))}
          </ul>
        </>
      )}

      {userData.role === 'tutor' && (
        <>
          <h2 className="myaccount-subtitle">Kursus yang Diajar:</h2>
          <ul>
            {userData.kursus_diajar?.map((kursus) => (
              <li key={kursus._id}>{kursus.namaKursus}</li>
            ))}
          </ul>
        </>

      )}
      </Container>
    </>
    </>
  );
};

export default MyAccount;
