import styles from './page.module.css';
import Header from '../../components/Header';
import Book from '../../components/book';

export default function RishikeshHero() {
  return (
    <main>
    <Header/>
    <div className={styles.r_t_wrapper}>
      <section className={styles.rishikeshhero}>
        <div className={styles.rishikeshcontent}>
          <h1 className={styles.rishikeshtitle}>Rishikesh</h1>
          <p className={styles.subtitle}>3 Days | Adventure</p>
        </div>
      </section>
    </div>
    <div className={styles.r_t_plan}>
      <h1 className={styles.planTitle}>Package Plan</h1>
      <img className={styles.img} src="/images/rishikesh_plan2.png" alt="Plan" />
    </div>
    <Book/>
    </main>
  );
}
