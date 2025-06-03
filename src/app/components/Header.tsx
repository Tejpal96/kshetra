import styles from './Header.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.logo}>Kshetra</div>
        <nav className={styles.nav}>
          <a href="/#hero_home">Home</a>
          <a href="/#desti">Destinations</a>
          <a href="/#packages">Packages</a>
          <a href="/#about">About</a>
          <a href="/#contact">Contact</a>
        </nav>
    </header>
  );
}
