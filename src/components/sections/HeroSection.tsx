import { useEffect } from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Image from 'next/image';
import styles from '@/styles/components/sections/HeroSection.module.css';
import { AnimatedText } from '../ui/AnimatedText';

const HeroSection = () => {
  return (
    <section className={styles['hero-section']} id='hero-section'>
      <div className={styles.left}>
        <AnimatedText delay="0.1s" className={styles.heroHeading}>Software.</AnimatedText>
        <AnimatedText delay="0.3s" className={styles.heroHeading}>People.</AnimatedText>
        <AnimatedText delay="0.5s" className={styles.heroHeading}>Me.</AnimatedText>
        
        <p className={`fade-animate ${styles.heroParagraph}`} style={{animationDelay: "0.5s"}}>
          Creating and designing user-oriented software solutions to change people's lives and nurture our vision of the world.
        </p>
        
        <div className={`fade-animate ${styles['hero-actions']}`} style={{animationDelay: "0.6s"}}>
          <a data-nosnippet href="#about-section" className={styles['hero-aboutme-button']}>
            <AccountCircleOutlinedIcon />
            About me 
          </a>
          <div className={styles['hero-socials']}>
            <a 
              target="_blank" 
              href="https://www.linkedin.com/in/alejandro-manrique-nunez/"
              rel="noopener noreferrer"
            >
              <Image 
                src="/socials/linkedin-dark.svg" 
                alt="LinkedIn" 
                width={24} 
                height={24} 
              />
            </a>
            <a 
              target="_blank" 
              href="https://github.com/alejo742"
              rel="noopener noreferrer"
            >
              <Image 
                src="/socials/github-dark.svg" 
                alt="GitHub" 
                width={24} 
                height={24} 
              />
            </a>
            <a 
              target="_blank" 
              href="https://www.fiverr.com/alejandroman742"
              rel="noopener noreferrer"
            >
              <Image 
                src="/socials/fiverr-dark.svg" 
                alt="Fiverr" 
                width={24} 
                height={24} 
              />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <Image 
          className={`fade-animate ${styles.heroImage}`} 
          src="/images/alejandro-workspace-img.jpeg" 
          alt="neutral workspace" 
          width={600} 
          height={450} 
          style={{animationDelay: "0.6s"}}
          priority
        />
      </div>
    </section>
  );
};

export default HeroSection;