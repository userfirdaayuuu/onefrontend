import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { course_list } from "../../Assets/Index";
import './Material.css';
import { Link } from "react-router-dom";

const Material = ({id, name, description, image}) => {
    return (
        <Link to={`/course/${id}`} className="course-item-link">
        <Container fluid className="material-container">
            <h1 className="material-title">Materi</h1>
            <Row className="material-row">
                {course_list.map((item) => (
                    <Col className="material-col">
                    <Card className="material-card">
                        <Card.Img variant="top" src={image} />
                        <Card.Body className="material-card-body">
                            <Card.Title className="material-card-title">{name}</Card.Title>
                            <Card.Text className="material-card-desc">{description}</Card.Text>
                            {/* <Card.Text className="material-card-mapel">{item.category}</Card.Text> */}
                        </Card.Body>
                    </Card>
                </Col>
                ))}
            </Row>
        </Container>
        </Link>
    )
}

export default Material;