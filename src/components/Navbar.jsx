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

    if(window.innerWidth <= 880) {
      const navbarAnchors = document.querySelectorAll('.main-navbar-anchor, .main-navbar-contact');
      navbarAnchors.forEach(anchor => {
        anchor.addEventListener('click', () => {
          navbarBurger.classList.toggle('open');
          navbarMobile.classList.toggle('active');
        });
      });
    }

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
            <span className="banner-dot">
              <div className="dot"></div>
              <div className="dot-bg"></div>
            </span>
            <h1>ALEJANDRO</h1>
          </a>
          <div className="main-navbar-links">
            <a data-nosnippet className="main-navbar-anchor" href='#about-section'>About</a>
            <a data-nosnippet className="main-navbar-anchor" href='#skills-section'>Skills</a>
            <a data-nosnippet className="main-navbar-anchor" href='#work-section'>My Work</a>
            <a data-nosnippet className="main-navbar-anchor" href='#contact-section'>Contact</a>
            <a className="main-navbar-button main-navbar-resume" href='https://drive.google.com/file/d/1UVOb734dLB3Ye4UQ-pJ_FFVEK952PRZk/view?usp=sharing' target='_blank'>
              <span className='material-symbols-outlined'>
                demography
              </span>
              Resumé
            </a>
          </div>
        </div>
        <div className="main-navbar-mobile">
          <div className="main-navbar-links">
              <a data-nosnippet className="main-navbar-anchor" href='#about-section'>About</a>
              <a data-nosnippet className="main-navbar-anchor" href='#skills-section'>Skills</a>
              <a data-nosnippet className="main-navbar-anchor" href='#work-section'>My Work</a>
              <a data-nosnippet className="main-navbar-anchor" href='#contact-section'>Contact</a>
              <a className="main-navbar-button main-navbar-resume" href='https://drive.google.com/file/d/1UVOb734dLB3Ye4UQ-pJ_FFVEK952PRZk/view?usp=sharing' target='_blank'>
                <span className='material-symbols-outlined'>
                  demography
                </span>
                Resumé
              </a>
            </div>
        </div>
    </div>
  );
}

export default Navbar;