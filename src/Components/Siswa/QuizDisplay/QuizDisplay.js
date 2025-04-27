import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { QuizContext } from "../../../Providers/QuizContext";
import QuizItem from "../QuizItem/QuizItem";
import "./QuizDisplay.css";

const QuizDisplay = () => {
    const { course_name } = useParams();
    console.log("course_name dari URL:", course_name);

    // const navigate = useNavigate();

    const { quiz_list } = useContext(QuizContext);
    console.log("quiz_list:", quiz_list);

    if (!quiz_list) return <h2>Loading...</h2>;

    // Filter materi berdasarkan course_name dari URL
    const filteredQuizzes = quiz_list.filter(quiz => 
        quiz.course_name.toLowerCase() === course_name.toLowerCase()
    );
    console.log("Filtered Quizzes:", filteredQuizzes);

    if (filteredQuizzes.length === 0) return <h2>Quiz tidak ditemukan</h2>;

    return (
        <div className="quiz-display">
            <h2 className="quiz-display-title">{course_name.toUpperCase()}</h2>
            <div className="quiz-display-list">
                {filteredQuizzes.map((item) => (
                    <QuizItem
                        key={item._id}
                        id={item._id}
                        name={item.name}
                    />
                ))}
            </div>
        </div>
    );
};

export default QuizDisplay;
