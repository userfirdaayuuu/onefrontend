import React, {useState} from 'react';
import "./Navbar.css";
import { assets } from '../../Assets/Index';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [menu, setMenu] = useState("home");

    return (
        <div className='navbar'>
            <img src={assets.logo} alt='' className='logo' />
            <ul className='navbar-menu'>
                <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home </Link>
                <a href='#courses' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
                {/* <a href='#' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</a> */}
                <Link to='/quiz'>contact us</Link>
                <Link to='/about'>about</Link>
                {/* <a href='#/about' onClick={()=>setMenu("about")} className={menu==="about"?"active":""}>about</a> */}
            </ul>
            <div className='navbar-right'>
                <Link to="/login">
                <button>Login</button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;