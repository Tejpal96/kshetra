import styles from './about.module.css';

export default function About() {
  return (
    <section className={styles.about} id='about'>
      <div className={styles.aboutContent}>
        <h1 className={styles.aboutTitle}>About Us</h1>
        <div className={styles.aboutwrapper}>
          <img src='/images/tungnath_flo.jfif' alt='about us image' className={styles.aboutimage} />
          <p className={styles.aboutSubtitle}>Welcome to Kshetra, your trusted companion for spiritual and scenic journeys through the majestic land of Uttarakhand and beyond. we specialize in organizing Char Dham Yatra packages — including Kedarnath, Badrinath, Gangotri, and Yamunotri — as well as a wide range of customized tours, adventure trips, and family vacations. Our mission is to make your journey smooth, comfortable, and spiritually fulfilling. Whether you're seeking divine blessings in the Himalayas or exploring the natural beauty and culture of North India, we handle every detail — from transportation and accommodation to guided support.</p>
        </div>
      </div>
    </section>
  );
}
