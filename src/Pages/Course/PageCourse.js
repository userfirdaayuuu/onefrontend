import React, { useState } from "react";
// import CourseContextProvider from "../Providers/CourseContext";
import CourseContextProvider from "../../Providers/CourseContext";
import CourseDisplay from "../../Components/Siswa/CourseDisplay/CourseDisplay";
import './PageCourse.css';
// import CourseDisplay from "../Components/CourseDisplay/CourseDisplay";

const PageCourse = () => {
    const [category, setCategory] = useState("All");

    return (
        <CourseContextProvider>
            <div className="course-page">
                <h1>Semua Materi Kursus</h1>
                <CourseDisplay category={category} />
            </div>
        </CourseContextProvider>
    );
};

export default PageCourse;
