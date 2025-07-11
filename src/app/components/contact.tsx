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
          <Link href="/packages/privacy-policy">Privicy Policy</Link>
          <Link href="/#about">About</Link>
          <Link href="/#contact">Contact</Link>
    </div>
    <div className={styles.contact}>
          <h1>🔗Contact</h1>
          {/*<p>🗺Address:</p>*/}
          <p>☎Contact number:-  +919557234267 +917817012191</p>
          <p>✉Mail:-  kshetra499@gmail.com</p>
          <div className={styles.social}>
            <Link href='https://www.instagram.com/kshetra499/' target="_blank" rel="noopener noreferrer"><img src='/images/insta-logo.jpg' alt='instagram'></img></Link>
          </div>
    </div>
    <div className={styles.whatsapp}>
          <h1>Chat With us on Whatsapp</h1>
          <p>We are happy to chat with you and clear your doubts.</p>
          <h2><Link href='https://wa.me/919557234267' target="_blank" rel="noopener noreferrer">WhatsApp Us</Link></h2>
    </div>
    </section>
  );
}
