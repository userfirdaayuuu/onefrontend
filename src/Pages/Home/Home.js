import React from "react";
import "./Home.css";
import Header from "../../Components/Header/Header";
// import Course from "../../Components/Course/Course";
// import CourseDisplay from "../../Components/CourseDisplay/CourseDisplay";
// import Navbar from "../../Components/Navbar/Navbar";
import TestNavbar from "../../Components/TestNavbar/TestNavbar";
import Footer from "../../Components/Footer/Footer";
import PageCourse from "../Course/PageCourse";
import Course from "../../Components/Course/Course";

const Home = () => {

    // const [category, setCategory] = useState("All");

    return (
        <div className="hero">
            <TestNavbar />
            <Header />
            {/* <Course category={category} setCategory={setCategory} /> */}
            {/* <CourseDisplay category={category}/> */}
            <Course />
            <Footer />
        </div>
    )
}

export default Home;