import React from "react";
import './Sidebar.css';
import { assets } from '../../../../Assets/Index';

const Sidebar = ({show}) => {
    return (
        <div className={show ? 'sidebar active' : 'sidebar'}>
            <img src={assets.logobaru} alt="logo" className="logo" />
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/quiz">Quiz</a>
                </li>
                <li>
                    <a href="/course">Kursus</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/calendar">Calendar</a>
                </li>
                {/* <li>
                    <a href="/admininformasikursus">Admin informasi kursus</a>
                </li> */}
                <li>
                    <a href="/takequiz">take quiz</a>
                </li>
                {/* <li>
                    <a href="/profile">profile</a>
                </li> */}
                <li>
                    <a href="/tutorunggah">tutor unggah 2</a>
                </li>
                <li>
                    <a href="/buatquiz">tutor quiz</a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;
