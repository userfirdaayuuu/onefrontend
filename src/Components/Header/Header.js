import React from 'react';
import './Header.css';
import bghome from '../../Assets/bghome.png';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className='hero'>
        <div className='header' style={{ backgroundImage: `url(${bghome})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className='header-contents'>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
                <p>Donec ac pretium erat. Aliquam varius pellentesque odio, vel dapibus turpis finibus sit amet. Curabitur accumsan molestie volutpat.</p>
                <Link to="/course">
                    <button className="button">View Course</button>
                </Link>
                {/* <button>View Course</button> */}
            </div>
        </div>
        <hr />
        </div>
    )
}

export default Header