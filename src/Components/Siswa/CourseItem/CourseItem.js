import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import "../../Style/Material.css"; // <--- pakai file baru!

const CourseItem = ({ id, name, courseId }) => {
  const navigate = useNavigate();

  return (
    <Card className="materi-card shadow-sm h-100">
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Card.Title className="materi-title mb-3">
            {name || "Tanpa Judul"}
          </Card.Title>
        </div>
        <div className="mt-auto d-grid">
          <Button
            className="btn-lihat-materi"
            onClick={() => navigate(`/course-material/${courseId}/${id}`)}
          >
            Lihat Materi
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CourseItem;
