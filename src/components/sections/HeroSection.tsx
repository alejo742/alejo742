import { useEffect } from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Image from 'next/image';
import styles from '@/styles/components/sections/HeroSection.module.css';

const HeroSection: React.FC = () => {
  return (
    <section className={styles['hero-section']} id='hero-section'>
      <div className={styles.left}>
        <div><h2 className={styles['text-animate']} style={{animationDelay: "0.1s"}}>Software.</h2></div>
        <div><h2 className={styles['text-animate']} style={{animationDelay: "0.3s"}}>People.</h2></div>
        <div><h2 className={styles['text-animate']} style={{animationDelay: "0.5s"}}>Me.</h2></div>
        <p className={styles['fade-animate']} style={{animationDelay: "0.5s"}}>
          Creating and designing user-oriented software solutions to change people's lives and nurture our vision of the world.
        </p>
        <div className={styles['hero-actions'] + ' ' + styles['fade-animate']} style={{animationDelay: "0.6s"}}>
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
          className={styles['fade-animate']} 
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