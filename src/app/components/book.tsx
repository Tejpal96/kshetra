import styles from './book.module.css';

export default function Book() {
  return (
    <section className={styles.book} id='book'>
      <div className={styles.bookContent}>
        <div className={styles.book_b1}>
            <h1 className={styles.bookTitle}>Online Booking</h1>
            <p className={styles.bookSubtitle}>Book your journey with Kshetra.</p>
            <p className={styles.bookSubtitle}>30% deposit of the tour package cost is required at the time of Booking.</p>
        </div>
        <div className={styles.bookbtn}>
            <p>Book Now</p>
        </div>
      </div>
    </section>
  );
}
