import React from "react";
import "./QuizItem.css";
import { Link } from "react-router-dom";
import { Card, Container, Row, Col } from "react-bootstrap";

const QuizItem = ({id, name, description, course_name}) => {

    return (
        <Link to={`/quiz/${course_name}/${id}`} className="quiz-item-link">
        <Container fluid className="quiz-item-container">
            <Row className="quiz-item-row">
                <Col className="quiz-item-col">
                <Card className="quiz-item-card">
                    <Card.Body className="quiz-card-body-item">
                        <Card.Title className="quiz-card-title-item">{name}</Card.Title>
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

export default QuizItem;