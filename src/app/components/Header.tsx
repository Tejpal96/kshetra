'use client';
import { useState } from 'react';
import styles from './Header.module.css';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
        <div className={styles.logo}><Link href="/#hero_home">Kshetra</Link></div>

        <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
          <Link href="/#hero_home">Home</Link>
          <Link href="/#desti">Destinations</Link>
          <Link href="/#packages">Packages</Link>
          <Link href="/packages/privacy-policy">Privacy Policy</Link>
          <Link href="/#about">About</Link>
          <Link href="/#contact">Contact</Link>
        </nav>

        <button
        className={styles.burger}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>
    </header>
  );
}
