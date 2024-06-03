import './Landing.css'
import React from 'react';
import Navbar from '../components/Navbar.jsx';

function Landing() {
  return (
    <div className="landing-wrapper">
      <Navbar/>
      <main>
        <section className="hero-section" id='hero-section'>
          <div className="left">
            <h2>Software.</h2>
            <h2>People.</h2>
            <h2>Me.</h2>
            <p>Creating and designing user-oriented software solutions to change people's lives and nurture our vision of the world.</p>
            <div className="hero-actions">
              <a href="#about-section" className='hero-aboutme-button'>
                <span className='material-symbols-outlined'>
                  account_circle
                </span> 
                About me 
              </a>
              <div className="hero-socials">
                <a href="https://www.linkedin.com/in/alejandro-manrique-nunez/">
                  <img src="/assets/socials/linkedin-dark.svg" alt="LinkedIn" />
                </a>
                <a href="https://github.com/alejo742">
                  <img src="/assets/socials/github-dark.svg" alt="GitHub" />
                </a>
              </div>
            </div>
          </div>
          <div className="right">
            <img src="/assets/images/alejandro-workspace-img.jpeg" alt="" />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Landing;