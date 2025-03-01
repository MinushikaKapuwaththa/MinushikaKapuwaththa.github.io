import React from 'react'
import './MobileNav.css'

const MobileNav = ({isopen,toggleMenu}) => {
  return <>

  <div
   className={`mobile-menu ${isopen ? "active" :""} `}
   onClick={toggleMenu}>

    <div className='mobile-menu-container'>
      <ul>
    <li>
              <a className="menu-item">About</a>
            </li>
            <li>
              <a className="menu-item">Projects</a>
            </li>
            <li>
              <a className="menu-item">Work Experience</a>
            </li>
            <li>
              <a className="menu-item">Contact Me</a>
            </li>
            <button className="contact-btn" onClick={() => {}}>
              Hire Me</button>
          </ul>

    </div>




   </div>
  
  </>

    
  
}

export default MobileNav