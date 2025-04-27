// src/Components/Quiz/TakeQuiz.js
import React, { useState, useEffect } from 'react';

const TakeQuiz = () => {
  const [quizList, setQuizList] = useState([]);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  useEffect(() => {
    const savedQuiz = JSON.parse(localStorage.getItem('quizData')) || [];
    setQuizList(savedQuiz);
  }, []);

  const handleAnswerChange = (index, value) => {
    setAnswers({ ...answers, [index]: value });
  };

  const handleSubmit = () => {
    let correct = 0;
    quizList.forEach((quiz, i) => {
      if (answers[i] === quiz.correctAnswer) {
        correct++;
      }
    });
    setScore(correct);
  };

  return (
    <div className="container mt-4">
      <h3>Kerjakan Quiz</h3>
      {quizList.length === 0 ? (
        <p>Belum ada soal.</p>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
          {quizList.map((quiz, index) => (
            <div key={index} className="mb-4">
              <h5>{index + 1}. {quiz.question}</h5>
              {quiz.options.map((option, i) => (
                <div className="form-check" key={i}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    checked={answers[index] === option}
                    onChange={() => handleAnswerChange(index, option)}
                    required
                  />
                  <label className="form-check-label">{option}</label>
                </div>
              ))}
            </div>
          ))}

          <button type="submit" className="btn btn-success">Submit</button>
        </form>
      )}

      {score !== null && (
        <div className="mt-3 alert alert-info">
          Skor Kamu: {score} dari {quizList.length}
        </div>
      )}
    </div>
  );
};

export default TakeQuiz;
