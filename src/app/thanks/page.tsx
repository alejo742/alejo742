'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HomeIcon from '@mui/icons-material/Home';
import styles from '@/styles/pages/thanks.module.css';

export default function ThanksPage() {
  const router = useRouter();

  // Auto redirect after 15 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 15000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.iconWrapper}>
          <CheckCircleOutlineIcon className={styles.icon} />
        </div>
        <h1 className={styles.title}>Thank You!</h1>
        <p className={styles.message}>
          Your message has been successfully sent. I'll get back to you soon!
        </p>
        <div className={styles.divider}></div>
        <p className={styles.redirectMessage}>
          You'll be redirected to the home page in a few seconds...
        </p>
        <Link href="/" className={styles.homeButton}>
          <HomeIcon />
          Return to Home
        </Link>
      </div>
      <div className={styles.background}>
        <div className={styles.shape}></div>
        <div className={styles.shape}></div>
      </div>
    </div>
  );
}