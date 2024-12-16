import { useState, useEffect } from 'react'
import './App.css'
import Profile from './Profile';
import About from './About';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';


function App() {
  
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1200);
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to check screen size
  const checkScreenSize = () => {
    setIsDesktop(window.innerWidth > 1200);
  };

  // Add event listener for window resize
  useEffect(() => {
    window.addEventListener('resize', checkScreenSize);

    // Cleanup the event listener on unmount
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    
  };

  return (
    <>
      {/* Conditional Rendering */}
      {isDesktop ? (
        <nav id="desktop-nav">
          <div className="logo">Muhammadh Althaf</div>
          <div>
            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>
      ) : (
        <nav id="responsive-nav">
          <div className="logo">Muhammadh Althaf</div>
          <div className="responsive-menu">
            <div className={`responsive-icon ${menuOpen ? 'open' : ''}`}   onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            {/* Menu links */}
            <div className={`menu-links ${menuOpen ? 'open' : ''}`}>
              <li><a href="#about" onClick={toggleMenu}>About</a></li>
              <li><a href="#education" onClick={toggleMenu}>Education</a></li>
              <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
              <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
              <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
            </div>
          </div>
        </nav>
      )}

      <div id='profile' className='section-pfl'>
      <Profile/>
      </div>

      <div id='about' className='section-abt'>
      <About/>
      </div>

      <div id='education' className='section-edu'>
      <Education/>
      </div>

      <div id='skills' className='section-skll'>
      <Skills/>
      </div>

      <div id='projects' className='section-prjct'>
      <Projects/>
      </div>

      <div id='contact' className='section-cntct'>
      <Contact/>
      </div>

    </>
  )
}

export default App
