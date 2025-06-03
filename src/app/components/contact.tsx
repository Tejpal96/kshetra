import styles from './contact.module.css';

export default function Contact() {
  return (
    <section className={styles.contactwrapper} id='contact'>
    <div className={styles.compony}>
          <h1>🏙Company</h1>
          <a href="/#hero_home">Home</a>
          <a href="/#desti">Destinations</a>
          <a href="/#packages">Packages</a>
          <a href="/#about">About</a>
          <a href="/#contact">Contact</a>
    </div>
    <div className={styles.contact}>
          <h1>Contact</h1>
          <p>🗺 Address:</p>
          <p>☎ Contact number:</p>
          <p>✉ Mail:</p>
          <div className={styles.social}>
            <a href='https://www.instagram.com/kshetra499/' target="_blank" rel="noopener noreferrer"><img src='/images/insta-logo.jpg' alt='instagram'></img></a>
          </div>
    </div>
    <div className={styles.whatsapp}>
          <a href="/#hero_home">Home</a>
          <a href="/#desti">Destinations</a>
          <a href="/#packages">Packages</a>
          <a href="/#about">About</a>
          <a href="/#contact">Contact</a>
    </div>
    </section>
  );
}
