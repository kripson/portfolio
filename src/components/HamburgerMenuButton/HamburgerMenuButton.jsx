import React from 'react';
import './HamburgerMenuButton.scss';

export const HamburgerMenuButton = ({checked}) => {


    return (
        <label for="check">
            <input type="checkbox" id="check" checked={checked} onClick={e=>e.stopPropagation()}/>
            <span></span>
            <span></span>
            <span></span>
        </label>
    )
}
