import React, { useContext } from "react";
import "./CourseDisplay.css";
import { CourseContext } from "../../Providers/CourseContext";
import CourseItem from "../CourseItem/CourseItem";

const CourseDisplay = () => {
    const { course_list } = useContext(CourseContext);

    // Mengelompokkan berdasarkan kategori
    const groupedCourses = course_list.reduce((acc, course) => {
        if (!acc[course.category]) {
            acc[course.category] = [];
        }
        acc[course.category].push(course);
        return acc;
    }, {});

    return (
        <div className="course-display">
            {/* <h2>Semua Materi Kursus</h2> */}
            {Object.keys(groupedCourses).map((category, index) => (
                <div key={index} className="category-section">
                    <h3 className="category-title">{category.toUpperCase()}</h3>
                    <div className="course-display-list">
                        {groupedCourses[category].map((item) => (
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
            ))}
        </div>
    );
};

export default CourseDisplay;
