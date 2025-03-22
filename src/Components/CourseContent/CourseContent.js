import React from "react";
import { useParams } from "react-router-dom";
import CourseData from "../../Providers/CourseData";
import './CourseContent.css';
// import { course_list } from "../../Assets/Index";

const CourseContent = () => {
    const { id } = useParams();
    const course = CourseData.find((item) => item._id === id);

    if (!course) return <h2>materi gaada</h2>;

    return (
        <div className="course-content-container">
            <h1 className="course-content-title">{course.name}</h1>
            {/* <img className="course-content-image" src={course.image} alt={course.name} style={{ width: "300px" }} /> */}
            <p className="course-content-description">{course.description}</p>

            {course.video && (
                <div className="course-content-video">
                    <h3>Video pembelajaran</h3>
                    <iframe
                    width="560"
                    height="315"
                    src={course.video}
                    title="video pembelajaran"
                    allowFullScreen
                    ></iframe>
                </div>
            )}

            {course.files.length > 0 && (
                <div className="course-content-materi">
                    <ul>
                        {course.files.map((file, index) => (
                            <li key={index}>
                                <a href={file.url} target="_blank" rel="noopener noreferrer">
                                    {file.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default CourseContent;