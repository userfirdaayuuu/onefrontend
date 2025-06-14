import React, { useEffect, useState } from 'react';
import AuthServices from '../../../Auth/AuthServices';
import './DashboardHero.css';

const DashboardHero = () => {
  // const [user, setUser] = useState(null);
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
  
  return (
    <div className="dashboard-hero">
      <div className="welcome-box">
        <h2>Selamat Datang di El-Gizer 🎓</h2>
        {loading ? (
        <p>Loading data user...</p>
      ) : (
        <p>Hai {userData?.nama || 'pengguna'}, semoga harimu menyenangkan!</p>
      )}
      </div>
    </div>
  );
};

export default DashboardHero;
