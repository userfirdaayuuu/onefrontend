import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CourseContext } from "../../Providers/CourseContext";
import "./CourseDetail.css";

const CourseDetail = () => {
    const { id } = useParams();
    const { course_list } = useContext(CourseContext);

    const course = course_list.find(item => item._id === id);

    if(!course) {
        return <h2>kursus tidak ada</h2>
    }

    return (
        <div className="course-detail">
            <img src={course.image} alt={course.name} />
            <h2>{course.name}</h2>
            <p>{course.description}</p>
        </div>
    );
};

export default CourseDetail;