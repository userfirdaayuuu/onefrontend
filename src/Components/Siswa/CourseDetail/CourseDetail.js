import React from "react";
import { useParams } from "react-router-dom";
import './CourseDetail.css';
import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";
import ListSiswa from "../SiswaList/ListSiswa";
import { dummy_course } from "../../../Assets/Index";

const CourseDetail = () => {
    const { course_name } = useParams();
    const selectedCourse = dummy_course.find(course => course.course_name === course_name);

    if (!selectedCourse) {
        return <p>Kursus tidak ditemukan</p>;
    }

    return (
        <div>
            <div className="back-icon">
                <Link to="/">
                    <MdArrowBackIos />
                </Link>
            </div>
            <h1 className="tittle">Kursus {selectedCourse.course_name}</h1>
            <p className="text">{selectedCourse.deskripsi}</p>
            
            <div className="d-flex align-items-center my-4">
                <img 
                    src={selectedCourse.tutor_image} 
                    alt="tutor" 
                    className="rounded-circle me-3" 
                    width="80" 
                    height="80" 
                />
                <div className="tutor-info ms-3">
                    <h5>{selectedCourse.tutor_name}</h5>
                    <p>Pengajar</p>
                </div>
            </div>

            <ListSiswa siswa={selectedCourse.siswa} />
        </div>
    );
};

export default CourseDetail;
