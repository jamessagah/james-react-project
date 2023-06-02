import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { Button } from './Button'
function Footer() {
  return (
    <div className='footer__container'>
      <section className='footer__subscription'>
        <p className='footer__subscription__heading'>
            Join our newsletter to recieve our best deals.
            </p>
        <p className='footer__subscription__text'>
            You can subscribe at any time.
            </p>
        <div className='input__areas'>
            <form>
                <input
                className='footer__input'
                name='email'
                type='email'
                placeholder='enter email'
                />
                <Button buttonstyle='btn--outline'>
                    Subscribe
                    </Button> 
            </form>
        </div>
      </section>
      <div className='footer__links'>
        <div className='footer__link__wrapper'>
            <div className='footer__link__items'>
            <h2>About us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>My career</Link>
            <Link to='/'>About</Link>
            </div>
            <div className='footer__link__items'>
            <h2>Contact us</h2>
            <Link to='/'>Contacts</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorship</Link>
            </div>
        </div>
        <div className='footer__link__wrapper'>
            <div className='footer__link__items'>
            <h2>Videos</h2>
            <Link to='/'>submit video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
            </div>
            <div className='footer__link__items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
            </div>
        </div>
      </div>
      <section className='social__meddia'>
        <div className='social__media__wrap'>
            <div className='footer__logo'>
                <Link to='/'className='social__logo'>
                <i className='fas fa-user-graduate'/>
                </Link>
            </div>
            <small className='website__rights'>James@2020</small>
            <div className='social__icons'>
                <Link className='social__icon__link facebook'
                to='/'
                target='_blank'
                aria-label='Facebook'>
                    <i className='fab fa-facebook-f'/>
                </Link>
                <Link className='social__icon__link youtube'
                to='/'
                target='_blank'
                aria-label='Youtube'>
                    <i className='fab fa-youtube'/>
                </Link>
                <Link className='social__icon__link twitter'
                to='/'
                target='_blank'
                aria-label='Twitter'>
                    <i className='fab fa-twitter'/>
                </Link>
                <Link className='social__icon__link instagram'
                to='/'
                target='_blank'
                aria-label='Instagram'>
                    <i className='fab fa-instagram'/>
                </Link>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
