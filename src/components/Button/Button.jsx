import React from 'react';
import './Button.scss';
import Arrow from '../../assets/Arrow 1.svg';

const Button = ({ label, onClick }) => {
    return (
        <div className="button body">
            {/* <div>
                {label}
            </div> */}
            <button className="button" onClick={onClick}>
                {label}
                <img src={Arrow} alt=""/>
            </button>


        </div>
    )
}

export default Button;