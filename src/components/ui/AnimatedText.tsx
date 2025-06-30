import React from "react";

// Create a component for animated text elements
interface AnimatedTextProps {
  children: React.ReactNode;
  delay?: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ children, delay = "0s", className = "" }) => (
  <div style={{ overflow: 'hidden' }}>
    <h2 
      className={`text-animate ${className}`} 
      style={{ animationDelay: delay }}
    >
      {children}
    </h2>
  </div>
);

// Create a component for section titles
interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ children, className = "" }) => (
  <div style={{ overflow: 'hidden' }}>
    <h3 className={`main-section-title scrollable text-animate ${className}`}>
      {children}
    </h3>
  </div>
);