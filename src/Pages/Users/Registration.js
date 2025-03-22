import React from "react";
import './Users.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import SignUp from "../../Components/User/Signup";
// import ButtonHome from "../../Components/User/ButtonHome";
// import Navbar from "../../Components/Navbar/Navbar";
import UserRegister from "../../Components/User/UserRegister";

function Registration() {
    return ( 
        // <div className="App">
        //     <Navbar />
        //     <ButtonHome />
        //     <div className="outer">
        //         <div className="inner-regis">
        //             <SignUp />
        //         </div>
        //     </div>
        // </div>
        <UserRegister />
    )
}

export default Registration;