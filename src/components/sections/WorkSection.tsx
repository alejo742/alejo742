"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import LaunchIcon from '@mui/icons-material/Launch';
import styles from '@/styles/components/sections/WorkSection.module.css';
import { projects } from '@/data/projects';

const WorkSection: React.FC = () => {
  // Apply staggered margin effect for work cards
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const workDisplayCards = document.querySelectorAll(`.${styles['work-card']}`);
      let cardColumnCounter = 1;
      
      workDisplayCards.forEach((card) => {
        if (window.innerWidth > 1100) {
          if (cardColumnCounter === 1) {
            (card as HTMLElement).style.marginTop = "0rem";
            cardColumnCounter = 2;
          } else if (cardColumnCounter === 2) {
            (card as HTMLElement).style.marginTop = "8rem";
            cardColumnCounter = 3;
          } else if (cardColumnCounter === 3) {
            (card as HTMLElement).style.marginTop = "16rem";
            cardColumnCounter = 1;
          }
        } else if (window.innerWidth > 700) {
          if (cardColumnCounter === 1) {
            (card as HTMLElement).style.marginTop = "0rem";
            cardColumnCounter = 2;
          } else if (cardColumnCounter === 2) {
            (card as HTMLElement).style.marginTop = "8rem";
            cardColumnCounter = 1;
          }
        }
      });
    }
  }, []);

  return (
    <section className={styles['work-section']} id="work-section">
      <Image 
        src="/backgrounds/grey-rectangle-bg.svg" 
        className={styles['work-section-background']} 
        alt="rectangle grey background"
        fill
        priority
        style={{ objectFit: 'cover' }}
      />
      <div className={styles['work-section-wrapper']}>
        <div>
          <h3 className={`${styles['main-section-title']} scrollable text-animate`}>
            See my <strong>work.</strong>
          </h3>
        </div>
        <div className={styles['work-cards-wrapper']}>
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`${styles['work-card']} scrollable fade-animate`} 
              style={{animationDelay: `${0.1 + (index * 0.05)}s`}}
            >
              <div className={styles['work-image']}>
                <Image 
                  src={project.image} 
                  alt={`${project.title} Logo`} 
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <a 
                  target='_blank' 
                  href={project.projectUrl}
                  rel="noopener noreferrer"
                >
                  <LaunchIcon style={{ fontSize: '2rem' }} />
                </a>
              </div>
              <div className={styles['work-content']}>
                <h5><strong>{project.type.split('|')[0]} |</strong> {project.type.split('|')[1]}</h5>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className={styles['work-tags']}>
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex}>{tag}</span>
                  ))}
                </div>
                <div className={styles['work-stack']}>
                  {project.techStack.map((tech, techIndex) => (
                    <a 
                      key={techIndex} 
                      target="_blank" 
                      href={tech.url}
                      rel="noopener noreferrer"
                    >
                      <img src={tech.icon} alt={tech.name} />
                    </a>
                  ))}
                </div>
              </div>
              <span className={styles['work-number']}>{project.id}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;