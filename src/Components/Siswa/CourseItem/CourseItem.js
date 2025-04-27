import React from "react";
import "./CourseItem.css";
import { Link } from "react-router-dom";
import { Card, Container, Row, Col } from "react-bootstrap";

const CourseItem = ({id, name, description, course_name}) => {


    return (
        <Link to={`/course/${course_name}/materials/${id}`} className="course-item-link">
        <Container fluid className="course-item-container">
            <Row className="course-item-row">
                <Col className="course-item-col">
                <Card className="course-item-card">
                    <Card.Body className="course-card-body-item">
                        <Card.Title className="course-card-title-item">{name}</Card.Title>
                        <Card.Text className="course-card-text-item">{description}</Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
        
        
        {/* <div className="course-item">
            <div className="course-item-info">
                <p className="course-item-name">{name}</p>
                <p className="course-item-description">{description}</p>
                
            </div>
        </div> */}

        </Link>
    )
}

export default CourseItem;