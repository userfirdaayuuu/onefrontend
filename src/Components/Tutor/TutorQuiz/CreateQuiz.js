// src/Components/Quiz/CreateQuiz.js
import React, { useState } from 'react';

const CreateQuiz = () => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');

  const handleOptionChange = (value, index) => {
    const updated = [...options];
    updated[index] = value;
    setOptions(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newQuiz = {
      question,
      options,
      correctAnswer,
    };

    const existingQuiz = JSON.parse(localStorage.getItem('quizData')) || [];
    existingQuiz.push(newQuiz);
    localStorage.setItem('quizData', JSON.stringify(existingQuiz));

    setQuestion('');
    setOptions(['', '', '', '']);
    setCorrectAnswer('');

    alert('Soal berhasil disimpan!');
  };

  return (
    <div className="container mt-4">
      <h3>Buat Soal Pilihan Ganda</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Pertanyaan:</label>
          <input
            type="text"
            className="form-control"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
        </div>

        {options.map((opt, index) => (
          <div key={index} className="mb-2">
            <label>Pilihan {index + 1}:</label>
            <input
              type="text"
              className="form-control"
              value={opt}
              onChange={(e) => handleOptionChange(e.target.value, index)}
              required
            />
          </div>
        ))}

        <div className="mb-3">
          <label>Jawaban Benar:</label>
          <select
            className="form-select"
            value={correctAnswer}
            onChange={(e) => setCorrectAnswer(e.target.value)}
            required
          >
            <option value="">-- Pilih jawaban --</option>
            {options.map((opt, i) => (
              <option key={i} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary">Simpan Soal</button>
      </form>
    </div>
  );
};

export default CreateQuiz;
