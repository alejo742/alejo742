import './Footer.css';
import React from 'react';

//*import social icons
import linkedinIcon from '../assets/socials/linkedin-white.svg';
import githubIcon from '../assets/socials/github-white.svg';
import fiverrIcon from '../assets/socials/fiverr-white.svg';

function Footer() {
    return(
        <footer>
            <div className="left">
                <h6>©2024 <a href="https://alejandromanrique.dev">alejandromanrique.dev</a></h6>
                <span>crafted with love</span>
            </div>
            <div className="right">
                <span>Find out more about me</span>
                <div className="footer-socials">
                    <a target="_blank" href="https://www.linkedin.com/in/alejandro-manrique-nunez/">
                        <img src={linkedinIcon} alt="LinkedIn" />
                    </a>
                    <a target="_blank" href="https://github.com/alejo742">
                        <img src={githubIcon} alt="GitHub" />
                    </a>
                    <a target="_blank" href="https://www.fiverr.com/alejandroman742">
                        <img src={fiverrIcon} alt="Fiverr" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer