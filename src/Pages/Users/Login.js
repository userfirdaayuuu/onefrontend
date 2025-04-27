import React from "react";
import './Users.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import UserLogin from "../../Components/User/UserLogin";
// import { MdArrowBackIos } from "react-icons/md";
// import { Link } from "react-router-dom";

function Login() {
    return ( 
        <div>
            {/* <div className="back-icon">
                <Link to="/">
                    <MdArrowBackIos />
                </Link>
        </div> */}
        <UserLogin />
        </div>
    )
}

export default Login;