"use client";

import { useEffect, useRef, useState } from 'react';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import styles from '@/styles/components/Navbar.module.css';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  
  const navbarWrapperRef = useRef<HTMLDivElement>(null);
  const navbarBurgerRef = useRef<HTMLDivElement>(null);
  const navbarMobileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Handle burger menu toggle
    const handleBurgerClick = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const burgerElement = navbarBurgerRef.current;
    if (burgerElement) {
      burgerElement.addEventListener('click', handleBurgerClick);
    }

    // Add click listeners to mobile menu items (only on mobile)
    if (typeof window !== 'undefined' && window.innerWidth <= 880) {
      const navbarAnchors = document.querySelectorAll(`.${styles['main-navbar-anchor']}, .${styles['main-navbar-contact']}`);
      
      const handleAnchorClick = () => {
        setIsMobileMenuOpen(false);
      };
      
      navbarAnchors.forEach(anchor => {
        anchor.addEventListener('click', handleAnchorClick);
      });
      
      // Cleanup
      return () => {
        navbarAnchors.forEach(anchor => {
          anchor.removeEventListener('click', handleAnchorClick);
        });
      };
    }
    
    // Cleanup burger listener
    return () => {
      if (burgerElement) {
        burgerElement.removeEventListener('click', handleBurgerClick);
      }
    };
  }, [isMobileMenuOpen]);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Set navbar height CSS variable
  useEffect(() => {
    if (navbarWrapperRef.current && typeof document !== 'undefined') {
      const offsetNavHeight = navbarWrapperRef.current.offsetHeight;
      document.documentElement.style.setProperty('--navbar-height', `${offsetNavHeight/10}rem`);
    }
  }, []);

  return (
    <div className={`${styles['main-navbar']}`}>
      <div 
        ref={navbarWrapperRef}
        className={`${styles['main-navbar-wrapper']} ${hasScrolled ? styles.shadow : ''}`}
      >
        <div 
          ref={navbarBurgerRef}
          className={`${styles['main-navbar-burger']} ${isMobileMenuOpen ? styles.open : ''}`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <a className={styles['main-navbar-banner']} href='#hero-section'>
          <span className={styles['banner-dot']}>
            <div className={styles.dot}></div>
            <div className={styles['dot-bg']}></div>
          </span>
          <h1>ALEJANDRO</h1>
        </a>
        <div className={styles['main-navbar-links']}>
          <a data-nosnippet className={styles['main-navbar-anchor']} href='#about-section'>About</a>
          <a data-nosnippet className={styles['main-navbar-anchor']} href='#skills-section'>Skills</a>
          <a data-nosnippet className={styles['main-navbar-anchor']} href='#work-section'>My Work</a>
          <a data-nosnippet className={styles['main-navbar-anchor']} href='#contact-section'>Contact</a>
          <a 
            className={`${styles['main-navbar-button']} ${styles['main-navbar-resume']}`} 
            href='https://drive.google.com/file/d/1UVOb734dLB3Ye4UQ-pJ_FFVEK952PRZk/view?usp=sharing' 
            target='_blank'
            rel="noopener noreferrer"
          >
            <TextSnippetOutlinedIcon />
            Resumé
          </a>
        </div>
      </div>
      <div 
        ref={navbarMobileRef}
        className={`${styles['main-navbar-mobile']} ${isMobileMenuOpen ? styles.active : ''}`}
      >
        <div className={styles['main-navbar-links']}>
          <a data-nosnippet className={styles['main-navbar-anchor']} href='#about-section'>About</a>
          <a data-nosnippet className={styles['main-navbar-anchor']} href='#skills-section'>Skills</a>
          <a data-nosnippet className={styles['main-navbar-anchor']} href='#work-section'>My Work</a>
          <a data-nosnippet className={styles['main-navbar-anchor']} href='#contact-section'>Contact</a>
          <a 
            className={`${styles['main-navbar-button']} ${styles['main-navbar-resume']}`} 
            href='https://drive.google.com/file/d/1UVOb734dLB3Ye4UQ-pJ_FFVEK952PRZk/view?usp=sharing' 
            target='_blank'
            rel="noopener noreferrer"
          >
            <TextSnippetOutlinedIcon />
            Resumé
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;