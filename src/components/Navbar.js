import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';
function Navbar() {
    const [click,setclick]=useState(false);
    const [button,setbutton]=useState(true)
    const Updateclick=()=>setclick(!click)
    const closemobile=()=>setclick(false)
     const showbutton=()=>{
        if(window.innerWidth<=960){
            setbutton(false)
        }
        else{
            setbutton(true)
        }
     };
      useEffect( ()=>{
        setbutton();
      },[])
     window.addEventListener('resize',showbutton)
  return (
    <>
      <nav className='navbar'>
        <div className='nav-container'>
            <Link to='/' className='nav-logo'onClick={closemobile}>
                James<i className='fas fa-user-graduate'/>
            </Link>
            <div className='nav-icon' onClick={Updateclick}>
               <i className={click ? 'fas fa-times': 'fas fa-bars'}/>
            </div>
            <ul className={click?'nav-menu active':'nav-menu'}>
                <li className='nav-items'>
                    <Link to='/' className='nav-links' onClick={closemobile}>Home</Link>
                </li>
                <li className='nav-items'>
                    <Link to='/contacts' className='nav-links'onClick={closemobile}>contacts</Link>
                </li>
                <li className='nav-items'>
                    <Link to='/services' className='nav-links'onClick={closemobile}>services</Link>
                </li>
                <li className='nav-items'>
                    <Link to='/sign-up' className='nav-links-mobile'onClick={closemobile}>sign up</Link>
                </li>
            </ul>
        
            {button && <Button buttonstyle ='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  )
}
export default Navbar;

