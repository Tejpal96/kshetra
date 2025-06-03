import styles from './PackagesCard.module.css';
import Link from 'next/link';

type PackagesProps = {
  image: string;
  title: string;
  days: string;
  rate: string;
  description: string;
  slug: string;
};

export default function PackagesCard({ image, title, days, rate, description,slug }: PackagesProps) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}><strong>🧭 {days}</strong></p>
        <p className={styles.description}><strong>💲 {rate}</strong></p>
        <p className={styles.description}>{description}</p>
        <div className={styles.buttonContainer}>
          <Link href={`/packages/${slug}`}><button className={styles.button}>Know More</button></Link>
          <button className={styles.buttonSecondary}>Book Now</button>
        </div>
      </div>
    </div>
  );
}
