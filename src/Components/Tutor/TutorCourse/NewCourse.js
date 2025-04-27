import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { list_course } from '../../../../Assets/Index';
import './NewCourse.css';
import { useNavigate } from 'react-router-dom';

const NewCourse = () => {
    const navigate = useNavigate();

    return (
        <Container fluid className="course-container">
            <h1 className="course-title">Course</h1>
            <Row className="course-row">
                {list_course.map((item) => (
                    <Col className="course-col">
                    <Card className="course-card"
                    onClick={() => navigate(`/course/${item.course_name.toLowerCase()}`)}>
                        {/* <Card.Img variant="top" src={item.course_image} /> */}
                        <Card.Body className="course-card-body">
                            <Card.Title className="course-card-title">{item.course_name}</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                ))}
            </Row>
        </Container>
    )
}

export default NewCourse;