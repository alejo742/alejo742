import './App.css';
import {React, useEffect} from 'react';
import Landing from './pages/Landing.jsx';

function App() {
  useEffect(() => {
    function setScrollAnims() {
      function isInView(element, scrollOffset = 0) {
        const elementTop = element.getBoundingClientRect().top;
        return (
          elementTop <= 
          ((window.innerHeight || document.documentElement.clientHeight) - scrollOffset)
        );
      };

      const scrollables = document.querySelectorAll('.scrollable');
      window.addEventListener('scroll', () => {
        scrollables.forEach(e => {
          if(isInView(e)) {
            e.classList.remove('animate-active');
            e.classList.add('animate-active');
          }
          else {
            e.classList.remove('animate-active');
          }
        })
      })
    };

    function handleAnims() {
      const navbar = document.querySelector('.main-navbar');
      navbar.style.animation = "paneDown 0.6s ease-out 0.3s forwards";

      const textAnimate = document.querySelectorAll('.text-animate');
      const fadeAnimate = document.querySelectorAll('.fade-animate');
      textAnimate.forEach(e => {
        e.classList.add("animate-active");
      });
      fadeAnimate.forEach(e => {
        e.classList.add("animate-active");
      });
      setScrollAnims();
    };

    if(document.readyState === "loading") {
      window.addEventListener('load', () => {
        const preloader = document.querySelector('.preloader');
        const landing = document.querySelector('.landing-wrapper');
        preloader.classList.add('loaded');
        setTimeout(() => {
          preloader.style.display = "none";
          landing.classList.add('loaded');
          handleAnims();
        }, 800);
      });
    }
    else {
      setTimeout(() => {
        const preloader = document.querySelector('.preloader');
        const landing = document.querySelector('.landing-wrapper');
        preloader.classList.add('loaded');
        setTimeout(() => {
          preloader.style.display = "none";
          landing.classList.add('loaded');
          handleAnims();
        }, 800);
      }, 800)
    }
  }, []);

  return (
    <div className="App">
      <div className="preloader">
        <div className="loader"></div>
      </div>
      <Landing/>
    </div>
  );
}

export default App;
