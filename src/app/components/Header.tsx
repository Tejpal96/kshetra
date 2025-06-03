import styles from './Header.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.logo}>Kshetra</div>
        <nav className={styles.nav}>
          <Link href="/#hero_home">Home</Link>
          <Link href="/#desti">Destinations</Link>
          <Link href="/#packages">Packages</Link>
          <Link href="/#about">About</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
    </header>
  );
}
