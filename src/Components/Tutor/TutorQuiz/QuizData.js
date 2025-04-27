import React from "react";

export const questions = [
    {
        questionText : 'What is the capital of france?',
        answerOptions: [
            { answerText: 'New York', isCorrect: false },
            { answerText: 'London', isCorrect: false },
            { answerText: 'Bekasi', isCorrect: false },
            { answerText: 'Paris', isCorrect: true },
            { answerText: 'Dubai', isCorrect: false },
        ]
    },
    {
        questionText : 'What the capital of indonesia?',
        answerOptions: [
            { answerText: 'surabaya', isCorrect: false },
            { answerText: 'jakarta', isCorrect: true },
            { answerText: 'aceh', isCorrect: false },
            { answerText: 'medan', isCorrect: false },
            { answerText: 'surabaya', isCorrect: false },
        ]
    },
    {
        questionText : 'What is the capital of japan?',
        answerOptions: [
            { answerText: 'tokyo', isCorrect: true },
            { answerText: 'kyoto', isCorrect: false },
            { answerText: 'totori', isCorrect: false },
            { answerText: 'haneda', isCorrect: false },
            { answerText: 'shibuya', isCorrect: false },
        ]
    }
]