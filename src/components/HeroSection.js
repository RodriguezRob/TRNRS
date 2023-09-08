import React from "react";
import { Button } from "./Button";
import './HeroSection.css';
import '../App.css';


function HeroSection() {

    return(
        <div className='hero-container'>
            <h1>Fall Sneaker Essentials</h1>
            <p>From retro to new releases, we got you covered</p>
            <div className='hero-btn'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    New Styles
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    Retro Heat
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;