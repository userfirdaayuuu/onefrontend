import React from "react";
import "./Course.css";
import { list_course } from "../../Assets/Index";

const Course = ({category, setCategory}) => {
    return (
        <div className="courses" id="courses">
            <h1>Kursus</h1>
            <p className="courses-text">Quisque varius posuere finibus. Curabitur convallis neque vel nunc interdum molestie.Cras porttitor fringilla tempor. Cras pulvinar nulla id ipsum sagittis dignissim.</p>
            <div className="courses-list">
                {list_course.map((item, index) => {
                    return (
                        <div onClick={()=>setCategory(prev=>prev===item.course_name?"All":item.course_name)} key={index} className="courses-list-item">
                            <img className={category===item.course_name?"active":""} src={item.course_image} alt=""/>
                            <p>{item.course_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    )
}

export default Course