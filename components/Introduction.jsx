import React from 'react';
import '../css/Introduction.css';

const style ={

}
const Introduction = () => {
    return (
        <div className='w-100 h-100 d-flex flex-column justify-content-center align-items-center' > 
            <p className="display-1 fw-bold text-uppercase text-center">
                <span className="fw-light text-secondary display-4">User Access</span>
                <br/>
                Control Module
            </p>
                <a href="#about-me" className="px-5 py-3 btn rounded-pill btn-primary fw-light fs-5 mt-4" smooth={true}>Know More</a>
        </div>
    )
}

export default Introduction