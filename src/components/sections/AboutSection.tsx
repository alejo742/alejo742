import React from 'react';
import Image from 'next/image';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';
import styles from '@/styles/components/sections/AboutSection.module.css';

const AboutSection: React.FC = () => {
  return (
    <section className={styles['about-section']} id='about-section'>
      <div className={styles.top}>
        <div className={`${styles['about-card']} ${styles['about-intro-card']} scrollable fade-animate`}>
          <div className={styles['about-intro-content']}>
            <h4>I'm <strong>Alejandro Manrique</strong>, a <strong>full-stack developer</strong> and <strong>college student</strong>.</h4>
            <p>As a 19-year old aspiring software engineer, my journey as a developer has been shaped by a profound human-centered vision. The main purpose of my path is to follow an impact-driven career as a developer.</p>
          </div>
          <a 
            data-nosnippet 
            href="#contact-section" 
            className={`${styles['about-main-button']} ${styles['about-contact-button']}`}
          >
            <ConnectWithoutContactOutlinedIcon />
            Contact me
          </a>
        </div>
        <div 
          className={`${styles['about-card']} ${styles['about-data-card']} scrollable fade-animate`} 
          style={{animationDelay: "0.3s"}}
        ></div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.left}>
          <div 
            className={`${styles['about-image-card']} scrollable fade-animate`} 
            style={{animationDelay: "0.1s"}}
          >
            <Image 
              src="/backgrounds/mural-dev.png" 
              alt="dev mural" 
              width={600} 
              height={350} 
            />
          </div>
          <div className={styles['about-split-card']}>
            <div 
              className={`${styles['about-card']} ${styles['about-data-card']} scrollable fade-animate`} 
              style={{animationDelay: "0.2s"}}
            >
              <h4><strong>30+</strong> clients</h4>
            </div>
            <div 
              className={`${styles['about-card']} ${styles['about-data-card']} scrollable fade-animate`} 
              style={{animationDelay: "0.2s"}}
            >
              <h4><strong>3+</strong> years exp.</h4>
            </div>
          </div>
        </div>
        <div 
          className={`${styles['about-card']} ${styles['about-more-card']} scrollable fade-animate`} 
          style={{animationDelay: "0.3s"}}
        >
          <div className={styles['about-more-content']}>
            <h4>Need <strong>more?</strong></h4>
            <p>Check out my latest work. Sometimes self-crafted or made collaboratively, always with love and purpose.</p>
          </div>
          <a 
            data-nosnippet 
            href="#work-section" 
            className={`${styles['about-main-button']} ${styles['about-more-button']}`}
          >
            See more
            <ManageSearchOutlinedIcon style={{ width: "2rem", height: "2rem" }} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;