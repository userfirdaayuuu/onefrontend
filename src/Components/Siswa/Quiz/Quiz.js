import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { list_quiz } from '../../../Assets/Index';
import './Quiz.css';
import { useNavigate } from 'react-router-dom';

const Quiz = () => {
    const navigate = useNavigate();

    return (
        <Container fluid className="quiz-container">
            <h1 className="quiz-title">quiz</h1>
            <Row className="quiz-row">
                {list_quiz.map((item) => (
                    <Col className="quiz-col">
                    <Card className="quiz-card"
                    onClick={() => navigate(`/quiz/${item.course_name.toLowerCase()}`)}>
                        {/* <Card.Img variant="top" src={item.course_image} /> */}
                        <Card.Body className="quiz-card-body">
                            <Card.Title className="quiz-card-title">{item.course_name}</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Quiz;