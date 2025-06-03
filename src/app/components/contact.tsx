import styles from './contact.module.css';
import Link from 'next/link';

export default function Contact() {
  return (
    <section className={styles.contactwrapper} id='contact'>
    <div className={styles.compony}>
          <h1>🏙Company</h1>
          <Link href="/#hero_home">Home</Link>
          <Link href="/#desti">Destinations</Link>
          <Link href="/#packages">Packages</Link>
          <Link href="/#about">About</Link>
          <Link href="/#contact">Contact</Link>
    </div>
    <div className={styles.contact}>
          <h1>Contact</h1>
          <p>🗺 Address:</p>
          <p>☎ Contact number:</p>
          <p>✉ Mail:</p>
          <div className={styles.social}>
            <Link href='https://www.instagram.com/kshetra499/' target="_blank" rel="noopener noreferrer"><img src='/images/insta-logo.jpg' alt='instagram'></img></Link>
          </div>
    </div>
    <div className={styles.whatsapp}>
          
    </div>
    </section>
  );
}
