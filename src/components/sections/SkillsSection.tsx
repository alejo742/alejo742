import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import styles from '@/styles/components/sections/SkillsSection.module.css';
import { Skill } from '@/types/skill';
import { skills } from '@/data/skills';

// Resume data interface
interface ResumeData {
  url: string;
  text: string;
}

const SkillsSection: React.FC = () => {

  // Resume data
  const resumeData: ResumeData = {
    url: 'https://drive.google.com/file/d/1UVOb734dLB3Ye4UQ-pJ_FFVEK952PRZk/view?usp=sharing',
    text: 'Check my resumé'
  };

  // Function to render a single skill item
  const renderSkillItem = (skill: Skill) => (
    <a key={skill.name} target="_blank" href={skill.url} rel="noopener noreferrer">
      <img src={skill.icon} alt={skill.name} />
    </a>
  );

  // Function to render a complete skill list
  const renderSkillList = (skillsToRender: Skill[] = skills) => (
    <ul className={styles['skills-slider']}>
      {skillsToRender.map(renderSkillItem)}
    </ul>
  );

  return (
    <section className={styles['skills-section']} id="skills-section">
      <div>
        <h3 className={`${styles['main-section-title']} scrollable fade-animate`}>
          I'm good at <strong>these...</strong>
        </h3>
      </div>
      <div className={`${styles['skills-slider-container']} scrollable fade-animate`}>
        {/* First slider wrapper - uses base skills */}
        <div className={styles['skills-slider-wrapper']}>
          {renderSkillList()}
          {renderSkillList()}
        </div>
        
        {/* Second slider wrapper - includes TypeScript and Firebase */}
        <div className={styles['skills-slider-wrapper']}>
          {renderSkillList()}
          {renderSkillList()}
        </div>
      </div>
      
      <Link 
        href={resumeData.url} 
        target='_blank' 
        className={`${styles['skills-resume-button']} scrollable fade-animate`}
        rel="noopener noreferrer"
      >
        <DescriptionOutlinedIcon style={{ fontSize: '1.4rem' }} />
        {resumeData.text}
      </Link>
    </section>
  );
};

export default SkillsSection;