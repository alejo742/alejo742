import './App.css';
import {React, useEffect} from 'react';
import Landing from './pages/Landing.jsx';

function App() {
  useEffect(() => {
    window.addEventListener('load', () => {
      const preloader = document.querySelector('.preloader');
      const landing = document.querySelector('.landing-wrapper');
      preloader.classList.add('loaded');
      landing.classList.add('loaded');
      setTimeout(() => {
        preloader.style.display = "none";
      }, 500);
    })
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
