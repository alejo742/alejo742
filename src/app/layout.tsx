"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    function setScrollAnims() {
      function isInView(element: HTMLElement, scrollOffset = 0) {
        const elementTop = element.getBoundingClientRect().top;
        return (
          elementTop <= 
          ((window.innerHeight || document.documentElement.clientHeight) - scrollOffset)
        );
      };

      const scrollables = document.querySelectorAll('.scrollable');
      window.addEventListener('scroll', () => {
        scrollables.forEach(e => {
          if(isInView(e as HTMLElement)) {
            e.classList.add('animate-active');
          }
          else {
            e.classList.remove('animate-active');
          }
        });
      });
      
      // Initial check for elements already in view
      scrollables.forEach(e => {
        if(isInView(e as HTMLElement)) {
          e.classList.add('animate-active');
        }
      });
    };

    function handleAnims() {
      const navbar = document.querySelector('.main-navbar');
      if (navbar) {
        navbar.setAttribute('style', 'animation: paneDown 0.6s ease-out 0.3s forwards');
      }

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

    const handlePageLoad = () => {
      const preloader = document.querySelector('.preloader');
      const landing = document.querySelector('.landing-wrapper');
      
      if (preloader && landing) {
        preloader.classList.add('loaded');
        
        setTimeout(() => {
          if (preloader instanceof HTMLElement) {
            preloader.style.display = "none";
          }
          
          landing.classList.add('loaded');
          setIsLoaded(true);
          
          // Delay animations slightly to ensure DOM is fully ready
          setTimeout(handleAnims, 100);
        }, 800);
      }
    };

    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      window.addEventListener('load', handlePageLoad);
      return () => window.removeEventListener('load', handlePageLoad);
    }
  }, []);

  return (
    <html lang="en">
      <body>
        <div className="preloader">
          <div className="loader"></div>
        </div>
        <div className="landing-wrapper">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}