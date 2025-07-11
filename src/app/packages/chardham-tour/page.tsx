import styles from './page.module.css';
import Header from '../../components/Header';
import Book from '../../components/book';

export default function Hero() {
  return (
    <main>
    <Header/>
    <div className={styles.r_t_wrapper}>
      <section className={styles.hero}>
        <div className={styles.content}>
          <h1 className={styles.title}>Char Dham Yatra</h1>
          <p className={styles.subtitle}>Kedarnath | Badrinath | Yamnotri | Gangotri</p>
        </div>
      </section>
    </div>
    <div className={styles.r_t_plan}>
      <h1 className={styles.planTitle}>Package Plan</h1>
      <img className={styles.img} src="/images/chardham_plan2.png" alt="Plan" />
    </div>
    <Book/>
    </main>
  );
}
