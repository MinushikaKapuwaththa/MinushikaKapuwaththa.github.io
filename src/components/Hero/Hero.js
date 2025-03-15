import React from 'react'
<<<<<<< HEAD
import img2 from '../../assets/hero/mypic3.PNG'
=======
import img2 from '../../assets/hero/my pic 3.jpg'
>>>>>>> c7e9244eab4945fd84da139d3ce88c55e3c35a43
import './Hero.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';


function Hero() {
  return (
<<<<<<< HEAD
   <section className='hero-container'>
    <div className='hero-content'>
        <h1>Hi! I'm </h1> 
        <h1><span> Minushika Kapuwaththa </span></h1>
        {/* <h2>I'm Quality Assurance Engineer</h2> */}
        <p>Final-year undergraduate at the University of Moratuwa, pursuing a degree in Information Technology and Management. Passionate about exploring new technologies, I approach tasks with maturity and responsibility, applying my knowledge through self-study and hard work to continuously grow in the field

        </p>
<div className='btn-sci'>
        <a href="#" className='btn'>Download CV</a>
        
        <div className='social-icons'>
            <a href="https://www.linkedin.com/in/minushika-kapuwaththa-9b8a7b1a4/">
                <LinkedInIcon />
            </a>
            <a href="https://github.com/MinushikaKapuwaththa">
                 <GitHubIcon  /> 
            </a>
            <a href="https://web.facebook.com/Minushika.kapuwaththa">
                <FacebookIcon /> 
            </a>
            
        </div>
        </div>  
    </div>
    <div className='hero-img'>
        <div className='img-box'>
            <div className='img-item'>
        <img src={img2} alt='hero-img'/>
        </div>
    </div>
    </div>
   </section>
=======
    <section className="home">
        <div className='home-info'>
            <h1>Hi I'm Minushika kapuwaththa</h1>
            <h2>I'm Quality Assurance Engineer</h2>
            <p>I am a final-year undergraduate at the University of Moratuwa, pursuing a degree in Information Technology and Management. Passionate about exploring new technologies, I approach tasks with maturity and responsibility, applying my knowledge through self-study and hard work to continuously grow in the field</p>

            <div className='btn-sci'>
                <a href='#'className='btn'>Download CV</a>
                <div className='sci'>
                    <a href='#'></a>
                    <a href='#'></a>
                    <a href='#'></a>
                    <a href='#'></a>
            </div>

        </div>
        </div>
        </section>
  
>>>>>>> c7e9244eab4945fd84da139d3ce88c55e3c35a43
  )
}

export default Hero;