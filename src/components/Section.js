import React from "react";
import '../App.css';
import { Button } from "./Button";
import './Section.css';
function Section(){
    return(
        <div className="section-container">
            <img src="im14.jpg"  />
            <h1>welcome?</h1>
            <p>what are you waiting for</p>
            <div className="btns">
                <Button className='section-btns'
                buttonstyle='btn--outline'
                buttonsize='btn--large'>Get started</Button>
                <Button className='section-btns'
                buttonstyle='btn--primary'
                buttonsize='btn--large'>
                    Watch my tutorials <i className="far fa-play-circle"/>
                </Button>
            </div>
        </div>
    )
}
export default Section;

