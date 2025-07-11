import styles from './Hero.module.css';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className={styles.hero} id = 'hero_home'>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.title}>Experience the Peace</h1>
          <p className={styles.subtitle}>The Goal is to die with memories not Dreams</p>
          <Link href="#desti" className={styles.cta}>
            Explore Destinations
          </Link>
        </div>
      </div>
    </section>
  );
}
