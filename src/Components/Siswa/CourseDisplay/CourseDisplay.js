import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import BackButton from "../../Common/Back/BackButton";
import AuthServices from "../../../Auth/AuthServices";
import CourseItem from "../CourseItem/CourseItem";
import "../../Style/CourseDisplay.css";

const CourseDisplay = () => {
  const { id } = useParams();
  const [materiList, setMateriList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const response = await AuthServices.getMateriKursus(id);
        console.log("Materi yang diambil:", response);
        if (response.success) {
          setMateriList(response.data);
        } else {
          console.error("Gagal fetch materi:", response);
        }
      } catch (error) {
        console.error("Gagal mengambil materi:", error);
        setMateriList([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMaterials();
  }, [id]);

  const courseTitle = materiList[0]?.kursus?.namaKursus?.toUpperCase() || "MATERI";

  return (
    <>
      <div className="button-back">
        <BackButton />
      </div>

      <Container className="py-5">
        <h2 className="course-title-display">{courseTitle}</h2>

        {loading ? (
          <p className="text-center">Loading...</p>
        ) : materiList.length === 0 ? (
          <h4 className="text-center">Belum ada materi</h4>
        ) : (
          <Row className="g-4 justify-content-center">
            {materiList.map((materi) => (
              <Col xs={12} sm={6} md={4} lg={3} key={materi.id}>
                <CourseItem
                  id={materi.id}
                  name={materi.judul_materi}
                  courseId={id}
                />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
};

export default CourseDisplay;
