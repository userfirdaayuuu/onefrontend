import React from "react";
import { questions } from "./QuizData";
import './Quiz.css'
import { useState } from "react";

const Quiz = () => {
    const [currentquestion, setCurrentQuestion] = useState(0)
    const [answered, setAnswered] = useState(false)
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const handleAnswerOption = (index, isCorrect) => {
        setAnswered(true)
        selectedAnswer(index)
        if(isCorrect) {
            
        }
    }
    const NextQuestion = () => {
        setCurrentQuestion (currentquestion + 1)
    }

    return (
        <div className="quiz">
            <div className="quiz-box">
                <div className="quiz-header">Quiz</div>
                <div>
                    <div className="question">{questions[currentquestion].questionText}</div>
                    {questions[currentquestion].answerOptions.map((option, index) => (
                        <button 
                        onClick={() => handleAnswerOption(index, option.isCorrect)}
                        className="answer">
                            {option.answerText}</button>
                    ))}
                    <button className="next-question"
                    disabled = {answered ? "" : "disabled"}
                    onClick={NextQuestion}>Next Question</button>
                    <p className="text-question">Question {currentquestion + 1} of {questions.length}</p>
                </div>
            </div>
        </div>
    )
}

export default Quiz;