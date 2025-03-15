import React, { useEffect, useState } from 'react';
import img2 from '../../assets/hero/mypic3.PNG';
import './Hero.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Set loaded state after a small delay to ensure animations trigger properly
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`hero-container ${isLoaded ? 'loaded' : ''}`}>
      <div className='hero-content'>
        <h1>Hello I'm </h1>
        <h1><span> Minushika Kapuwaththa</span></h1>
        <p>
          Final-year undergraduate at the University of Moratuwa, pursuing a degree in 
          Information Technology and Management. Passionate about exploring new technologies, 
          I approach tasks with maturity and responsibility, applying my knowledge through 
          self-study and hard work to continuously grow in the field.
        </p>
        <div className='btn-sci'>
          <a href="#" className='btn'>Download CV</a>
          <div className='social-icons'>
            <a href="https://www.linkedin.com/in/minushika-kapuwaththa-9b8a7b1a4/" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href="https://github.com/MinushikaKapuwaththa" aria-label="GitHub">
              <GitHubIcon />
            </a>
          </div>
        </div>
      </div>
      <div className='hero-img'>
        <div className='img-box'>
          <div className='img-item'>
            <img 
              src={img2} 
              alt='Minushika Kapuwaththa' 
              onLoad={() => setIsLoaded(true)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
