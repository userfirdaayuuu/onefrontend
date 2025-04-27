import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { tutor_course } from "../../Assets/Index";
import './Tutor.css';

const Tutor = () => {
    return (
        <Container fluid className="tutor-container">
            <h1 className="tutor-title">Tutor</h1>
            <Row className="tutor-row">
                {tutor_course.map((item) => (
                    <Col className="tutor-col">
                    <Card className="tutor-card">
                        <Card.Img variant="top" src={item.image} />
                        <Card.Body className="tutor-card-body">
                            <Card.Title className="tutor-card-title">{item.name}</Card.Title>
                            <Card.Text className="tutor-card-desc">{item.description}</Card.Text>
                            <Card.Text className="tutor-card-mapel">{item.mapel}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Tutor;