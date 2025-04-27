import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CourseContext } from "../../../Providers/CourseContext";
import CourseItem from "../CourseItem/CourseItem";
import "./CourseDisplay.css";

const CourseDisplay = () => {
    const { course_name } = useParams();
    console.log("course_name dari URL:", course_name);

    const { course_list } = useContext(CourseContext);
    console.log("course_list:", course_list);

    if (!course_list) return <h2>Loading...</h2>;

    // Filter materi berdasarkan course_name dari URL
    const filteredCourses = course_list.filter(course => 
        course.course_name.toLowerCase() === course_name.toLowerCase()
    );
    console.log("Filtered Courses:", filteredCourses);

    if (filteredCourses.length === 0) return <h2>Course tidak ditemukan</h2>;

    return (
        <div className="course-display">
            <h2 className="course-display-title">{course_name.toUpperCase()}</h2>
            <div className="course-display-list">
                {filteredCourses.map((item) => (
                    <CourseItem
                        key={item._id}
                        id={item._id}
                        name={item.name}
                        description={item.description}
                        image={item.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default CourseDisplay;
