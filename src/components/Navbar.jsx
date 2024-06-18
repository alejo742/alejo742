import './Navbar.css';
import { useEffect } from 'react';
import React from 'react';

function Navbar() {
  //this effect sets up listeners and actions for navbar menu
  useEffect(() => {
    const navbarBurger = document.querySelector('.main-navbar-burger');
    const navbarMobile = document.querySelector('.main-navbar-mobile');
    navbarBurger.addEventListener('click', () => {
      navbarBurger.classList.toggle('open');
      navbarMobile.classList.toggle('active');
    });

    const navbarAnchors = document.querySelectorAll('.main-navbar-anchor, .main-navbar-contact');
    navbarAnchors.forEach(anchor => {
      anchor.addEventListener('click', () => {
        navbarBurger.classList.toggle('open');
        navbarMobile.classList.toggle('active');
      });
    });

    const navbarWrapper = document.querySelector('.main-navbar-wrapper')
    window.addEventListener('scroll', () => {
      if(window.scrollY > 0) {
        navbarWrapper.classList.add('shadow')
      }
      else {
        navbarWrapper.classList.remove('shadow')
      }
    })

    //get the height and save it in a custom property
    let offsetNavHeight = navbarWrapper.offsetHeight
    root.style.setProperty('--navbar-height', `${offsetNavHeight/10}rem`);
  }, []);

  return (
    <div className="main-navbar">
        <div className="main-navbar-wrapper">
          <div className="main-navbar-burger">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <a className="main-navbar-banner" href='#hero-section'>
            <span className="banner-dot"></span>
            <h1>ALEJANDRO</h1>
          </a>
          <div className="main-navbar-links">
            <a className="main-navbar-anchor" href='#about-section'>About</a>
            <a className="main-navbar-anchor" href='#skills-section'>Skills</a>
            <a className="main-navbar-anchor" href='work-section'>My Work</a>
            <a className="main-navbar-button main-navbar-resume" href='#'>
              <span className='material-symbols-outlined'>
                demography
              </span>
              My Resumé
            </a>
            <a className="main-navbar-button main-navbar-contact" href='#contact-section'>
              <span className='material-symbols-outlined'>
                connect_without_contact
              </span>
              Contact
            </a>
          </div>
        </div>
        <div className="main-navbar-mobile">
          <div className="main-navbar-links">
            <a className="main-navbar-anchor" href='#about-section'>About</a>
            <a className="main-navbar-anchor" href='#skills-sections'>Skills</a>
            <a className="main-navbar-anchor" href='#work-section'>My Work</a>
            <a className="main-navbar-button main-navbar-resume" href='#'>
              <span className='material-symbols-outlined'>
                demography
              </span>
              My Resumé
            </a>
            <a className="main-navbar-button main-navbar-contact" href='#contact-section'>
              <span className='material-symbols-outlined'>
                connect_without_contact
              </span>
              Contact
            </a>
          </div>
        </div>
    </div>
  );
}

export default Navbar;