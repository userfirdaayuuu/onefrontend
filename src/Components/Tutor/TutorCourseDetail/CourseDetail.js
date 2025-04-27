import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import './CourseDetail.css';
import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";

const CourseDetail = () => {
    const { course_name } = useParams();
    const navigate = useNavigate();

    return (
        <div>
            <div className="back-icon">
                            <Link to="/">
                                <MdArrowBackIos />
                            </Link>
            </div>
            <h1 className="tittle">Kursus {course_name}</h1>
            <p className="text">Informasi tentang kursus {course_name} akan ditampilkan di sini.</p>
            <button className="button" onClick={() => navigate(`/course/${course_name}/materials`)} >lihat materi kursus</button>
        </div>
    );
};

export default CourseDetail;
