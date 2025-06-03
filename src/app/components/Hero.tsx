import styles from './Hero.module.css';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className={styles.hero} id = 'hero_home'>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.title}>Experience the Peace</h1>
          <p className={styles.subtitle}>Explore top destinations and Experience the Spiritual Peace of Uttarakhand.</p>
          <a href="#desti" className={styles.cta}>
            Explore Destinations
          </a>
        </div>
      </div>
    </section>
  );
}
