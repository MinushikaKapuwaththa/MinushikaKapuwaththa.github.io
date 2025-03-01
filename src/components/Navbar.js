import React, { useState } from 'react';
import './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import MobileNav from './MobileNav/MobileNav';

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    console.log(`Trying to scroll to: ${id}`, element); // Debugging
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setOpenMenu(false);
    } else {
      console.warn(`Element with ID "${id}" not found`);
    }
  };  

  return (
    <div>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

      <nav className="nav-wrapper">
        <div className="nav-content">
          <h1>Portfolio</h1>

          <ul className={openMenu ? 'active' : ''}>
            <li>
              <a className="menu-item" onClick={() => scrollToSection('')} >About</a>
            </li>
            <li>
              <a className="menu-item" onClick={() => scrollToSection('about')}>Education</a>
            </li>
            <li>
              <a className="menu-item" onClick={() => scrollToSection('experience')}>Technical Proficiency</a>
            </li>
            <li>
              <a className="menu-item" onClick={() => scrollToSection('work')}>Work Exprience</a>
            </li>
            <button className="contact-btn" onClick={() => scrollToSection('contact')}>Hire Me</button>
          </ul>

          <button className="menu-btn" onClick={toggleMenu}>
            <MenuIcon />
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
