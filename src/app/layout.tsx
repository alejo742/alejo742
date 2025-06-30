"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoaded, setIsLoaded] = useState(false);
  const pathname = usePathname(); // Track current route

  // Function to handle scroll animations
  const setScrollAnims = () => {
    function isInView(element: HTMLElement, scrollOffset = 0) {
      const elementTop = element.getBoundingClientRect().top;
      return (
        elementTop <= 
        ((window.innerHeight || document.documentElement.clientHeight) - scrollOffset)
      );
    };

    const scrollables = document.querySelectorAll('.scrollable');
    
    // Initial check for elements already in view
    scrollables.forEach(e => {
      if(isInView(e as HTMLElement)) {
        e.classList.add('animate-active');
      }
    });

    // Define the scroll handler
    const handleScroll = () => {
      scrollables.forEach(e => {
        if(isInView(e as HTMLElement)) {
          e.classList.add('animate-active');
        } else {
          e.classList.remove('animate-active');
        }
      });
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Return cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  };

  // Function to initialize animations
  const handleAnims = () => {
    const textAnimate = document.querySelectorAll('.text-animate');
    const fadeAnimate = document.querySelectorAll('.fade-animate');
    
    textAnimate.forEach(e => {
      e.classList.add("animate-active");
    });
    
    fadeAnimate.forEach(e => {
      e.classList.add("animate-active");
    });
  };

  // Effect for initial page load
  useEffect(() => {
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
          setTimeout(() => {
            handleAnims();
          }, 100);
        }, 100);
      }
    };

    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      window.addEventListener('load', handlePageLoad);
      return () => window.removeEventListener('load', handlePageLoad);
    }
  }, []);

  // Effect for handling route changes
  useEffect(() => {
    // Skip on initial load (will be handled by the page load effect)
    if (!isLoaded) return;
    
    // Reset animations when route changes
    handleAnims();
    
    // Add a small delay to ensure elements are in the DOM
    setTimeout(() => {
      // Re-initialize scroll animations
      const cleanup = setScrollAnims();
      
      // Trigger a scroll event to check initial visibility
      window.dispatchEvent(new Event('scroll'));
      
      // Return cleanup function
      return cleanup;
    }, 100);
  }, [pathname, isLoaded]);

  // Effect for scroll animations
  useEffect(() => {
    if (isLoaded) {
      // Set up scroll animations with proper cleanup
      return setScrollAnims();
    }
  }, [isLoaded]);

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