import React, { useState } from 'react';
import Menu from './Menu';
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const Theme = () => {
    const [style, setStyle] = useState('bg-dark text-white');
    const setModes = () => {
        const element = document.getElementById('backgroundMode');
        if(element.textContent.includes('Dark')) {
            setStyle('bg-dark text-light');
            element.innerHTML = `<div><span>${<MdOutlineLightMode />}</span><span> Light</span></div>`;
        }
        else {
            setStyle('bg-light text-dark');
            element.innerHTML = `<div><span>${<MdDarkMode />}</span><span> Dark</span></div>`;
        }
    };
    return (
        <div>
            <button type='button' id='backgroundMode' className='btn btn-light buttonName' onClick={setModes}>
                <MdOutlineLightMode /> Light
            </button>
            <Menu type={style}/>
        </div>
    );
};

export default Theme;