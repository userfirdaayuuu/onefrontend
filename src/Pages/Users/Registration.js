import React from "react";
import './Users.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import UserRegister from "../../Components/User/UserRegister";
// import { MdArrowBackIos } from "react-icons/md";
// import { Link } from "react-router-dom";

function Registration() {
    return ( 
        <div>
                    {/* <div className="back-icon">
                        <Link to="/">
                            <MdArrowBackIos />
                        </Link>
                </div> */}
                <UserRegister />
                </div>
    )
}

export default Registration;