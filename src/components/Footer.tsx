import React from 'react';
import styles from '@/styles/components/Footer.module.css';

import Image from 'next/image';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <h6>©{currentYear} <a href="https://alejandromanrique.dev">alejandromanrique.dev</a></h6>
        <span>crafted with love</span>
      </div>
      <div className={styles.right}>
        <span>Find out more about me</span>
        <div className={styles['footer-socials']}>
          <a 
            target="_blank" 
            href="https://www.linkedin.com/in/alejandro-manrique-nunez/"
            rel="noopener noreferrer"
          >
            <Image src="/socials/linkedin-white.svg" alt="LinkedIn" width={24} height={24} />
          </a>
          <a 
            target="_blank" 
            href="https://github.com/alejo742"
            rel="noopener noreferrer"
          >
            <Image src="/socials/github-white.svg" alt="GitHub" width={24} height={24} />
          </a>
          <a 
            target="_blank" 
            href="https://www.fiverr.com/alejandroman742"
            rel="noopener noreferrer"
          >
            <Image src="/socials/fiverr-white.svg" alt="Fiverr" width={24} height={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;