import Hero from './components/Hero';
import Header from './components/Header';
import FeaturedPackages from './components/FeaturedPackages';
import About from './components/about';
import PopularDestinations from './components/PopularDestinations';
import Book from './components/book';
import Contact from './components/contact';

import styles from './page.module.css';

export default function HomePage() {
  return (
    <>
      <div className={styles.heroWrapper}>
        <Header/>
        <Hero/>
        <PopularDestinations/>
        <FeaturedPackages/>
        <Book/>
        <About/>
        <Contact/>
      </div>
    </>
  );
}
