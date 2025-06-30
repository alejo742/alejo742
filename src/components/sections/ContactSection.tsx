"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import SendIcon from '@mui/icons-material/Send';
import styles from '@/styles/components/sections/ContactSection.module.css';

const ContactSection: React.FC = () => {
  const [redirectUrl, setRedirectUrl] = useState<string>('');
  
  // Set the redirect URL on the client side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setRedirectUrl(`${window.location.origin}/thanks`);
    }
  }, []);

  return (
    <section className={styles['contact-section']} id="contact-section">
      <div className={styles['contact-image']}>
        <Image
          src="/images/laptop-image.jpg"
          alt="laptop image"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          sizes="(max-width: 1000px) 0vw, 40vw"
        />
      </div>
      <div className={styles['contact-wrapper']}>
        <div>
          <h3 className={`${styles['main-section-title']} scrollable text-animate`}>
            Here to <strong>help.</strong>
          </h3>
        </div>
        <form className={styles['contact-form']} action="https://api.web3forms.com/submit" method="POST">
          {/* Important: Don't modify the access key */}
          <input type="hidden" name="access_key" value="389bb25c-ee20-466b-97ca-85e10b19a55e" />

          <div className={styles['double-input']}>
            <div className={`${styles['contact-input-holder']} scrollable fade-animate`}>
              <label htmlFor="contact-name-input">Your Name</label>
              <input 
                placeholder='Type here...' 
                type='text' 
                name="name" 
                id="contact-name-input" 
                className={styles['contact-input']}
                required
                suppressHydrationWarning
              />
            </div>

            <div 
              className={`${styles['contact-input-holder']} scrollable fade-animate`} 
              style={{animationDelay: "0.2s"}}
            >
              <label htmlFor="contact-email-input">Email</label>
              <input 
                placeholder='Type here...' 
                type='email' 
                name="email" 
                id="contact-email-input" 
                className={styles['contact-input']}
                required
                suppressHydrationWarning
              />
            </div>
          </div>

          <div className={`${styles['contact-input-holder']} scrollable fade-animate`}>
            <label htmlFor="contact-message-input">Your Message</label>
            <textarea 
              rows={10} 
              placeholder='Type here...' 
              name="message" 
              id="contact-message-input" 
              className={styles['contact-input']}
              required
            />
          </div>

          {/* Honeypot Spam Protection - Keep this unchanged */}
          <input type="checkbox" name="botcheck" hidden />

          {/* Set redirect URL only after it's available on client side */}
          {redirectUrl && <input type="hidden" name="redirect" value={redirectUrl} />}

          <button 
            className={`${styles['contact-submit-button']} scrollable fade-animate`} 
            type='submit'
          >
            <SendIcon />
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;