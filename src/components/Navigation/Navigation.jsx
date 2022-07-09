import React, { useState, useRef } from 'react';
// import { ButtonList } from '../../providers/ButtonListContext';
import NavigationCSS from './Navigation.module.css';

const Navigation = ({ onChange, state }) => {

    const getButtonState = buttonState =>
        buttonState === state ? 'active' : 'inactive';

    return (
        <nav>
            <div
            className={`${NavigationCSS.navContainer} flex-row-wrap flex-center`}>
                {/* todo: find out if there's a more efficient way to distribute an event handler amongst the context children */}
                <a state={getButtonState('aboutMe')} onClick={() => onChange('aboutMe')} href="#about-me-title">About Me</a>
                <a state={getButtonState('projects')} onClick={() => onChange('projects')} href="#projects-title">Projects</a>
                <a state={getButtonState('resume')} onClick={() => onChange('resume')} href="#resume-title">Resume</a>
                <a state={getButtonState('contact')} onClick={() => onChange('contact')} href="#contacts">Contact</a>
            </div>
        </nav>
    );
}

export default Navigation;