import React from "react";
import "./CourseItem.css";
import { Link } from "react-router-dom";

const CourseItem = ({id, name, description, image}) => {


    return (
        <Link to={`/course/${id}`} className="course-item-link">
        <div className="course-item">
            <div className="course-item-img-container">
                <img className="course-item-image" src={image} alt="" />
            </div>
            <div className="course-item-info">
                <p className="course-item-name">{name}</p>
                <p className="course-item-description">{description}</p>
                
            </div>
        </div>
        </Link>
    )
}

export default CourseItem;