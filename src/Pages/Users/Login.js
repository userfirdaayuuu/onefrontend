import React from "react";
import './Users.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import SignIn from "../../Components/User/SignIn";
// import Navbar from "../../Components/Navbar/Navbar";
import UserLogin from "../../Components/User/UserLogin";

function Login({setShowLogin}) {
    return ( 
        // <div className="App">       
        // <Navbar /> 
        //     <div className="outer">
        //         <div className="inner-login">
        //             <SignIn />
        //         </div>
        //     </div>
        // </div>
        <UserLogin />
    )
}

export default Login;