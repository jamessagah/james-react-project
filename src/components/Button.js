import React from 'react';
import {Link} from 'react-router-dom';
import './Button.css';
const STYLES= ['btn--primary','btn--outline']
const SIZES= ['btn--medium','btn--large']
export const Button=({
    children,
    type,
    onClick,
    buttonstyle,
    buttonsize
})=>{
    const checkButtonstyle=STYLES.includes(buttonstyle) ? buttonstyle:STYLES[0];
    const checkButtonsize=SIZES.includes(buttonsize) ? buttonsize:SIZES[0];
    return(
        <Link to='/sign-up' className='btn-mobile'>
            <button className={'btn ${checkButtonstyle} ${checkButtonsize}'}
                 type={type}
                 onClick={onClick}
                 >
                {children}
            </button> 
            </Link>
    )
    }