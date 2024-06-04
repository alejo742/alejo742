import './Landing.css'
import React from 'react';
import Navbar from '../components/Navbar.jsx';

//*hero section image imports
import linkedinIcon from '../assets/socials/linkedin-dark.svg'
import githubIcon from '../assets/socials/github-dark.svg'
import workspaceImage from '../assets/images/alejandro-workspace-img.jpeg'

//* about section image import
import laptopMural from '../assets/backgrounds/mural-dev.png'

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
                  <img src={linkedinIcon} alt="LinkedIn" />
                </a>
                <a href="https://github.com/alejo742">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </div>
          </div>
          <div className="right">
            <img src={workspaceImage} alt="" />
          </div>
        </section>

        <section className="about-section">
          <div className="top">
            <div className="about-card about-intro-card">
              <div className="about-intro-content">
                <h4>I'm <strong>Alejandro Manrique</strong>, a <strong>full-stack developer</strong> and <strong>college student</strong>.</h4>
                <p>As an aspiring software engineer, my journey as a developer has been shaped by a profound human-centered vision. The main purpose of my path is to follow and impact-driven career as a developer.</p>
              </div>
              <a href="" className="about-main-button about-contact-button">
                <span className="material-symbols-outlined">
                  connect_without_contact
                </span>
                Contact me
              </a>
            </div>
            <div className="about-card about-data-card"></div>
          </div>

          <div className="bottom">
            <div className="left">
              <div className="about-image-card">
                <img src={laptopMural} alt="" />
              </div>
              <div className="about-split-card">
                <div className="about-card about-data-card">
                  <h4><strong>50+</strong> clients</h4>
                </div>
                <div className="about-card about-data-card">
                  <h4><strong>3+</strong> years exp.</h4>
                </div>
              </div>
            </div>
            <div className="about-card about-more-card">
            <div className="about-more-content">
                <h4>Need<br></br><strong>more?</strong></h4>
                <p>Check out my latest work. Sometimes self-crafted or made collaborativelly, always with love and purpose.</p>
              </div>
              <a href="" className="about-main-button about-more-button">
                See more
                <span className="material-symbols-outlined">
                  data_loss_prevention
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Landing;