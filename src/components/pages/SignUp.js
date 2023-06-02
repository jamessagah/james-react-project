import React from "react";
import '../../App.css';
import { Button } from "../Button";
import './SignUp.css';

export default function SignUp(){
    return (
        <div className='input__areas'>
            <img  className="sign-up"/>
            <h1 className="input__header">Please fill all the requirements</h1>
            <p>Hi? welcome please make sure you fill all the spaces </p>
        <form>
            <input
            className='footer__input'
            name='full names'
            type='name'
            placeholder='enter full name'
            /> 
        </form>
        <form>
            <input
            className='footer__input'
            name='username'
            type='username'
            placeholder='enter username'
            /> 
        </form>
        <form>
            <input
            className='footer__input'
            name='email'
            type='email'
            placeholder='enter email'
           
            /> 
           
            <Button buttonstyle='btn--outline'>Register</Button>
        </form>
    </div>
        
    
    )
}