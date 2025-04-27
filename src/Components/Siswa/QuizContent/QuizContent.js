import React from "react";
import { questions } from "./QuizData";
import './QuizContent.css'
import { useState } from "react";

const QuizContent = () => {
    const [currentquestion, setCurrentQuestion] = useState(0)
    const [answered, setAnswered] = useState(false)
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [score, setScore] = useState(0)
    const [showScore, setShowScore] = useState(false)
    const handleAnswerOption = (index, isCorrect) => {
        setAnswered(true)
        setSelectedAnswer(index)
        if(isCorrect) {
            setScore(score + 1);
        }
    }
    const NextQuestion = () => {
        setAnswered(false)
        setSelectedAnswer(null)
        const nextQuestion = currentquestion + 1;
        if(nextQuestion < questions.length){
            setCurrentQuestion(nextQuestion)
        }else{
            setShowScore(true)
        }
    }

    return (
        <div className="quiz">
            <div className="quiz-box">
                <div className="quiz-header">Quiz</div>
                {showScore ? (<div>
                    <p>selamat y score kamu {score} of {questions.length}</p>
                    <button className="home-button" onClick={() => window.location.href = "/"}>Home</button>
                </div> 
                ) : ( 
                <div>
                    <div className="question">{questions[currentquestion].questionText}</div>
                    {questions[currentquestion].answerOptions.map((option, index) => (
                        <button 
                        onClick={() => handleAnswerOption(index, option.isCorrect)}
                        className={`answer ${answered ? option.isCorrect ? "bg-green-200" : selectedAnswer === index ? "bg-red-200" : "" : ""}`}>
                            {option.answerText}</button>
                    ))}
                    <button className={`${answered ? "bg-green-300" : "bg-blue-200"} next-question`}
                    disabled = {answered ? "" : "disabled"}
                    onClick={NextQuestion}>Next Question</button>
                    <p className="text-question">Question {currentquestion + 1} of {questions.length}</p>
                </div>
                )}
            </div>
        </div>
    )
}

export default QuizContent;