import React from 'react'
import img2 from '../../assets/img2.png'
import './Hero.css'

function Hero() {
  return (
   <section className='hero-container'>
    <div className='hero-content'>
        <h1>Hi! I'm Minushika Kapuwaththa </h1>
        <p>I am a final-year undergraduate at the University of Moratuwa, pursuing a degree in Information Technology and Management. Passionate about exploring new technologies, I approach tasks with maturity and responsibility, applying my knowledge through self-study and hard work to continuously grow in the field

        </p>

        {/* <button className='conbtn'>Resume</button> */}
        
        
    </div>

    <div className='hero-img'>
        <div>
            <div className='tech-icon'>
                <img src={ img2} alt="Profile"/>
            </div>
        </div>

    </div>
   </section>
  )
}

export default Hero;