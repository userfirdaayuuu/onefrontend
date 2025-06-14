import React, { useState, useEffect } from "react";
import "../../Style/CardCourse.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// OPTIONAL: Gunakan emoji atau icon dari react-icons
import { FaBook } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { GiMaterialsScience } from "react-icons/gi";
import { MdLanguage } from "react-icons/md";
import { BiMath } from "react-icons/bi";

const CourseCard = () => {
  const navigate = useNavigate();
  const [kursusList, setKursusList] = useState([]);

  useEffect(() => {
    const fetchKursus = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/kursus");
        const data = await res.json();
        const kursusArray = Array.isArray(data) ? data : data.data;
        setKursusList(kursusArray);
      } catch (error) {
        console.error("Gagal mengambil data kursus:", error);
      }
    };

    fetchKursus();
  }, []);

  // Fungsi untuk menentukan icon berdasarkan nama kursus
  const getIcon = (namaKursus) => {
    switch (namaKursus.toLowerCase()) {
      case "matematika":
        return <BiMath size={30} />;
      case "ilmu pengetahuan alam":
        return <GiMaterialsScience size={30} />;
      case "komputer":
        return <FaComputer size={30} />;
      case "bahasa inggris":
        return <MdLanguage size={30} />;
      default:
        return <FaBook size={30} />;
    }
  };

  return (
    <Container className="py-5">
      <h1 className="course-title">Kursus</h1>
      <Row className="g-4 justify-content-center">
        {kursusList.map((kursus) => (
          // <Col md={6} sm={12} key={kursus.id}>
          <Col xs={12} sm={6} md={4} lg={3} key={kursus.id}>
            <Card className="text-center shadow-sm h-100">
              <Card.Body className="card-body-center">
                <div className="card-body-icon">
                  {getIcon(kursus.namaKursus)}
                </div>
                <Card.Title>{kursus.namaKursus}</Card.Title>
                <Button
                  className="card-body-button"
                  onClick={() => navigate(`/course/${kursus.id}`)}
                >
                  Lihat Kursus
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CourseCard;
