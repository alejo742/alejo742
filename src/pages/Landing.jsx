import './Landing.css'
import {React, useEffect} from 'react';
import Navbar from '../components/Navbar.jsx';

//*hero section image imports
import linkedinIcon from '../assets/socials/linkedin-dark.svg';
import githubIcon from '../assets/socials/github-dark.svg';
import workspaceImage from '../assets/images/alejandro-workspace-img.jpeg';

//* about section image import
import laptopMural from '../assets/backgrounds/mural-dev.png';

//* work section image imports
import rectangleBackground from '../assets/backgrounds/grey-rectangle-bg.svg';
import binatImage from '../assets/images/binat-image.svg';

//* contact section image import
import laptopImage from '../assets/images/laptop-image.jpg';

function Landing() {
  useEffect(() => {
    const workDisplayCards = document.querySelectorAll('.work-card');
    let cardColumnCounter = 1;
    workDisplayCards.forEach((card) => {
      if(window.innerWidth > 1100)  {
        if(cardColumnCounter == 1) {
          card.style.marginTop = "0rem";
          cardColumnCounter = 2;
        }
        else if(cardColumnCounter == 2) {
          card.style.marginTop = "8rem";
          cardColumnCounter = 3;
        }
        else if(cardColumnCounter == 3) {
          card.style.marginTop = "16rem";
          cardColumnCounter = 1;
        };
      }

      else if(window.innerWidth > 700) {
        if(cardColumnCounter == 1) {
          card.style.marginTop = "0rem";
          cardColumnCounter = 2;
        }
        else if(cardColumnCounter == 2) {
          card.style.marginTop = "8rem";
          cardColumnCounter = 1;
        };
      }
    });
  }, []);

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
                <a target="_blank" href="https://www.linkedin.com/in/alejandro-manrique-nunez/">
                  <img src={linkedinIcon} alt="LinkedIn" />
                </a>
                <a target="_blank" href="https://github.com/alejo742">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </div>
          </div>
          <div className="right">
            <img src={workspaceImage} alt="" />
          </div>
        </section>

        <section className="about-section" id='about-section'>
          <div className="top">
            <div className="about-card about-intro-card">
              <div className="about-intro-content">
                <h4>I'm <strong>Alejandro Manrique</strong>, a <strong>full-stack developer</strong> and <strong>college student</strong>.</h4>
                <p>As an aspiring software engineer, my journey as a developer has been shaped by a profound human-centered vision. The main purpose of my path is to follow an impact-driven career as a developer.</p>
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
                <h4>Need <strong>more?</strong></h4>
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

        <section className="skills-section" id="skills-section">
          <h3 className="main-section-title">I'm good at <strong>these...</strong></h3>
          <div className='skills-slider-container'>
            <div className="skills-slider-wrapper">
              <ul className="skills-slider">
                <a target="_blank" href="https://www.w3.org/html/">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                </a>
                <a target="_blank" href="https://www.w3schools.com/css/">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                </a>
                <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                </a>
                <a target="_blank" href="https://reactjs.org/">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                </a>
                <a target="_blank" href="https://nodejs.org/">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
                </a>
                <a target="_blank" href="https://www.figma.com/">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
                </a>
                <a target="_blank" href="https://git-scm.com/">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
                </a>
                <a target="_blank" href="https://www.ruby-lang.org/en/">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-plain.svg" />
                </a>
                <a target="_blank" href="https://rubyonrails.org/">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain-wordmark.svg" />
                </a>
                <a target="_blank" href="https://www.postgresql.org/">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" />
                </a>
                <a target="_blank" href="https://kotlinlang.org/">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg" />
                </a>
                <a target="_blank" href="https://developer.android.com/">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg" />
                </a>
                <a target="_blank" href="https://www.linux.org/">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" />
                </a>
              </ul>
              <ul className="skills-slider">
                <a target="_blank" href="https://www.w3.org/html/">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                </a>
                <a target="_blank" href="https://www.w3schools.com/css/">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                </a>
                <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                </a>
                <a target="_blank" href="https://reactjs.org/">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                </a>
                <a target="_blank" href="https://nodejs.org/">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
                </a>
                <a target="_blank" href="https://www.figma.com/">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
                </a>
                <a target="_blank" href="https://git-scm.com/">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
                </a>
                <a target="_blank" href="https://www.ruby-lang.org/en/">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-plain.svg" />
                </a>
                <a target="_blank" href="https://rubyonrails.org/">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain-wordmark.svg" />
                </a>
                <a target="_blank" href="https://www.postgresql.org/">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" />
                </a>
                <a target="_blank" href="https://kotlinlang.org/">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg" />
                </a>
                <a target="_blank" href="https://developer.android.com/">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg" />
                </a>
                <a target="_blank" href="https://www.linux.org/">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" />
                </a>
              </ul>
            </div>
            <div className="skills-slider-wrapper">
              <ul className="skills-slider">
                <a target="_blank" href="https://www.w3.org/html/">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                </a>
                <a target="_blank" href="https://www.w3schools.com/css/">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                </a>
                <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                </a>
                <a target="_blank" href="https://reactjs.org/">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                </a>
                <a target="_blank" href="https://nodejs.org/">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
                </a>
                <a target="_blank" href="https://www.figma.com/">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
                </a>
                <a target="_blank" href="https://git-scm.com/">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
                </a>
                <a target="_blank" href="https://www.ruby-lang.org/en/">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-plain.svg" />
                </a>
                <a target="_blank" href="https://rubyonrails.org/">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain-wordmark.svg" />
                </a>
                <a target="_blank" href="https://www.postgresql.org/">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" />
                </a>
                <a target="_blank" href="https://kotlinlang.org/">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg" />
                </a>
                <a target="_blank" href="https://developer.android.com/">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg" />
                </a>
                <a target="_blank" href="https://www.linux.org/">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" />
                </a>
              </ul>
              <ul className="skills-slider">
                <a target="_blank" href="https://www.w3.org/html/">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                </a>
                <a target="_blank" href="https://www.w3schools.com/css/">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                </a>
                <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                </a>
                <a target="_blank" href="https://reactjs.org/">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                </a>
                <a target="_blank" href="https://nodejs.org/">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
                </a>
                <a target="_blank" href="https://www.figma.com/">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
                </a>
                <a target="_blank" href="https://git-scm.com/">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
                </a>
                <a target="_blank" href="https://www.ruby-lang.org/en/">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-plain.svg" />
                </a>
                <a target="_blank" href="https://rubyonrails.org/">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain-wordmark.svg" />
                </a>
                <a target="_blank" href="https://www.postgresql.org/">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" />
                </a>
                <a target="_blank" href="https://kotlinlang.org/">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg" />
                </a>
                <a target="_blank" href="https://developer.android.com/">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg" />
                </a>
                <a target="_blank" href="https://www.linux.org/">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" />
                </a>
              </ul>
            </div>
          </div>
          <a href="" className='skills-resume-button'>
            <span className='material-symbols-outlined'>
              demography
            </span>
            Check my resumé
          </a>
        </section>

        <section className="work-section" id="work-section">
          <img src={rectangleBackground} className="work-section-background"/>
          <div className="work-section-wrapper">
            <h3 className="main-section-title">See what <strong>I do.</strong></h3>
            <div className="work-cards-wrapper">
              <div className="work-card">
                <div className="work-image">
                  <img src={binatImage} alt="" />
                  <a href="https://binat-businesswear.com">
                    <span className='material-symbols-outlined'>
                      captive_portal
                    </span>
                  </a>
                </div>
                <div className="work-content">
                  <h5><strong>E-Commerce Web |</strong> Team Project</h5>
                  <h4>Binat</h4>
                  <p>Full-stack e-commerce website for a German business clothing startup.</p>
                  <div className="work-stack">
                  <a target="_blank" href="https://www.w3.org/html/">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                  </a>
                  <a target="_blank" href="https://www.w3schools.com/css/">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                  </a>
                  <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                  </a>
                  <a target='_blank' href="https://www.djangoproject.com">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" />
                  </a>
                  <a target='_blank' href="https://www.postgresql.org">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg" />
                  </a>
                  <a target='_blank' href="https://aws.amazon.com">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" />
                  </a>
                  </div>
                </div>

                <span className="work-number">1</span>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact-section">
          <div className="contact-image">
            <img src={laptopImage} alt="" />
          </div>
          <div className="contact-wrapper">
            <h3 className="main-section-title">Here to <strong>help.</strong></h3>
            <form className='contact-form' action="https://api.web3forms.com/submit" method="POST">
              <input type="hidden" name="access_key" value="389bb25c-ee20-466b-97ca-85e10b19a55e" />

              <div className="double-input">
                <div className="contact-input-holder">
                  <label htmlFor="contact-name-input">Your Name</label>
                  <input placeholder='Type here...' type='text' name="name" id="contact-name-input" className='contact-input' />
                </div>

                <div className="contact-input-holder">
                  <label htmlFor="contact-email-input">Email</label>
                  <input placeholder='Type here...' type='email' name="email" id="contact-email-input" className='contact-input' />
                </div>
              </div>

              <div className="contact-input-holder">
                <label htmlFor="contact-message-input">Your Message</label>
                <textarea rows={10} placeholder='Type here...' name="message" id="contact-message-input" className='contact-input'></textarea>
              </div>

              {/* Honeypot Spam Protection */}
              <input type="checkbox" name="botcheck" hidden />

              <button className="contact-submit-button" type='submit'>
                <span className='material-symbols-outlined'>
                  forward_to_inbox
                </span>
                Send
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Landing;