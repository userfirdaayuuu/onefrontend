import React, { useEffect, useState }  from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
// import { cards_new } from "../../../Assets/Index";
import { useNavigate } from 'react-router-dom';
import BackButton from "../../Common/Back/BackButton";
import '../../Style/CardCourse.css'; // Import your CSS file
import AuthServices from '../../../Auth/AuthServices';

const TutorCourseMaterial = () => {
  const navigate = useNavigate(); 
  const [kursus, setKursus] = useState([]);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const fetchKursus = async () => {
      const token = localStorage.getItem("token");
      const user = JSON.parse(localStorage.getItem("user"));
      setUserRole(user.role || null); // Set role user dari localStorage
      if (!token) {
        console.error("Token tidak ditemukan. Pastikan Anda sudah login.");
        return;
      }
      
      try {
        let kursusData = [];
        if (user.role === "siswa") {
          kursusData = await AuthServices.getKursusSiswa();
        } else if (user.role === "tutor") {
          // Buat method baru kalau belum ada: getKursusTutor()
          kursusData = await AuthServices.getKursusTutor();
        }

    setKursus(kursusData);
      } catch (error) {
        console.error("Gagal mengambil data kursus:", error);
      }
    };

    fetchKursus();
  }, []);

  return (
    <div className="course">
      <div className="button-back">
        <BackButton />
      </div>
    <Container className="container-course">
      <h1 className="course-title">Kursus {userRole === 'siswa' ? 'Saya' : userRole === 'tutor' ? 'yang Diajar' : ''}</h1>
      <Row className="custom-row-spacing">
        {kursus.length === 0 ? (
            <p>Belum ada kursus ditemukan.</p>
          ) : (
            kursus.map((item, index) => (
              <Col md={6} sm={12} key={index}>
                <Card className="text-center shadow-sm h-100">
                  <Card.Body className="card-body-center">
                    <div className="card-body-icon">📘</div>
                    <Card.Title>{item.namaKursus}</Card.Title>
                    <Card.Text>Materi pembelajaran untuk kursus ini tersedia.</Card.Text>
                    <Button
                      className="card-body-button"
                      onClick={() => navigate(`/tutor-course-material/${item._id}`)}
                    >
                      Lihat Materi
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          )}
      </Row>
    </Container>
    </div>
  );
};

export default TutorCourseMaterial;
