import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./UICardGrid.css"; 
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { cards_new } from "../../Assets/Index";
import { useNavigate } from 'react-router-dom';

const UICardBaru = () => {
    const navigate = useNavigate(); 

  return (
    <Container className="py-5">
        <h1 className="course-title">Course</h1>
      <Row className="g-4 justify-content-center">
        {cards_new.map((item, index) => (
          <Col md={6} sm={12} key={index}>
            <Card className="text-center shadow-sm h-100">
              <Card.Body>
                <div className="mb-3">{item.icon}</div>
                <Card.Title>{item.course_name}</Card.Title>
                <Card.Text>{item.text}</Card.Text>
                <Button variant={item.buttonColor} 
                onClick={() => navigate(`/course/${item.course_name.toLowerCase()}`)}>
                    {item.buttonText}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default UICardBaru;
