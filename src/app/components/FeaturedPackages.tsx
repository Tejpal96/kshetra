'use client';

import { useRef } from 'react';
import styles from './FeaturedPackages.module.css';
import PackagesCard from './PackagesCard';

const destinations = [
  {
    slug: 'rishikesh-tour',
    image: '/images/Rishikesh.jpg',
    title: 'Rishikesh Tour',
    days: 'Days : 3',
    rate: 'Rate : 9499/- Per Person',
    description: 'Explore the city of Spirituality ',
  },
  {
    slug: 'chardham-tour',
    image: '/images/chardham.jpg',
    title: 'Chardham Yatra',
    days: 'Days : 12',
    rate: 'Rate : 29999/- Per Person',
    description: 'Experience whole Sprituality in one Package',
  },
  {
    slug: 'do-dham-tour',
    image: '/images/Badrinath2.jpg',
    title: 'Do dham Yatra',
    days: 'Days : 6',
    rate: 'Rate : 18499/- Per Person',
    description: 'Experience whole Sprituality in one Package',
  },
  {
    slug: 'kedarnath-tour',
    image: '/images/kedarnath.jpg',
    title: 'Kedarnath Yatra',
    days: 'Days : 3',
    rate: 'Rate : 11999/- Per Person',
    description: 'Experience whole Sprituality in one Package',
  },
  {
    slug: 'panchkedar-tour',
    image: '/images/tungnath.jpg',
    title: 'Panch Kedar',
    days: 'Days : 12',
    rate: 'Rate : 52000/- Per Person',
    description: 'Experience whole Sprituality in one Package',
  },
];

export default function FeaturedPackages() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth / 1.5; // adjust speed
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className={styles.section} id="packages">
      <h2 className={styles.heading}>Our Packages</h2>
      <div className={styles.scrollWrapper}>
        <button className={styles.arrow} onClick={() => scroll('left')}>&#8249;</button>
        <div className={styles.grid} ref={scrollRef}>
          {destinations.map((pack, idx) => (
            <div className={styles.cardWrapper} key={idx}>
              <PackagesCard
                image={pack.image}
                title={pack.title}
                rate = {pack.rate}
                days = {pack.days}
                description={pack.description}
                slug = {pack.slug}
              />
            </div>
          ))}
        </div>
        <button className={styles.arrow} onClick={() => scroll('right')}>&#8250;</button>
      </div>
    </section>
  );
}

