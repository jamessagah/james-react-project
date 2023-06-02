import React from 'react'
import Carditem from './Carditem'
import './ActualCard.css'
function ActualCard() {
  return (
    <div className='cards'>
      <h2>MY TESTIMONIALS</h2>
      <div className='cards__contaner'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
                <Carditem
                src='images/pic4.jpg'
                text='I have really enjoyed being with james for decards,we all have been creating websites
                from scratch using html,css and javascript the all combined efforts have enabled further more introduced
                a framework to support our website become more complex and easier to understand..'
                label='Ziporah Mwaniki'
                path='/services'
                />
                <Carditem
                src='/images/pic5.jpg'
                text='I remember James being entusiastic about Tech he has been always trying to build robust applications
                using codepe(a mere phone application software) What i can say he is very hardworking, very silent in our family
                he makes things out of imagination and comes up with something very interesting..'
                label='Priscah miheso'
                path='/services'
                />
            </ul>
            <ul className='cards__items'>
                <Carditem
                src='/images/pic1.png'
                text='James used to be a choir master in my church i really miss his sweat voice,the band always
                seem to be inlign with what he likes,hes is extra-ordinary'
                label='Rev Ezekiel Mwai'
                path='/services'
                />
                <Carditem
                src='/images/pic2.png'
                text='Good morning,they say Technology enhances growth both inside the country as well outside the country
                i used to work with James in Maintaining webites,adding Blogs and so on.The journey to coding isint easy
                it requires persistent effort and growth..'
                label='Dr Mark Ann'
                path='/services'
                />
            </ul>
            <ul className='cards__items'>
                <Carditem
                src='/images/pic6.png'
                text='Explore more from my experience words'
                label='Sarah michael'
                path='/services'
                />
                <Carditem
                src='/images/pic7.png'
                text='im very much impressed for this journey'
                label='Gibs Nelson'
                path='/services'
                />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default ActualCard;
