import React from "react";
// import Course from "../../Components/Course/Course";
import CourseDisplay from "../../Components/CourseDisplay/CourseDisplay";
// import { useState } from "react";

const PageCourseDisplay = () => {
    // const [category, setCategory] = useState("All");

    return (
        <div>
            {/* <Course category={category} setCategory={setCategory} /> */}
            <CourseDisplay/>
        </div>
    )
}

export default PageCourseDisplay;