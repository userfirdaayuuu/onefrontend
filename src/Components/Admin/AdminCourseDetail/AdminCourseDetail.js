import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import './AdminCourseDetail.css';
// import { MdArrowBackIos } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const AdminCourseDetail = () => {
    const { course_name } = useParams();
    const navigate = useNavigate();

            return (
        <div>
            {/* <div className="back-icon">
                            <Link to="/">
                                <MdArrowBackIos />
                            </Link>
            </div> */}
            <h1 className="title-admin">Kursus {course_name}</h1>
            <p className="text-admin">Informasi tentang kursus {course_name} akan ditampilkan di sini.</p>
            <button className="button" onClick={() => navigate(`/course/${course_name}/materials`)} >lihat materi kursus</button>
            <div className="edit-icon">
                            <Link to="/editcourse">
                            <FaRegEdit />
                            </Link>
            </div>
        </div>
    );
};

export default AdminCourseDetail;
