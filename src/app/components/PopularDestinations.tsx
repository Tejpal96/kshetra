'use client';
import styles from './PopularDestinations.module.css';

const destinations = [
  { name: 'Rishikesh', image: '/images/Rishikesh.jpg',pkgs: '>Rishikesh' },
  { name: 'Badrinath', image: '/images/badrinath.jpg' ,pkgs: '>Char Dham'},
  { name: 'Kalpeshwar', image: '/images/Kalpeshwar.jpg', pkgs:'>Panch Kedar' },
  { name: 'Kedarnath', image: '/images/kedarnath.jpg', pkgs:'>Char Dham' },
  { name: 'Lakshman Jhoola', image: '/images/lakshman-jhula.jpg', pkgs:'>Rishikesh' },
  { name: 'Madmaheshwar', image: '/images/Madmaheshwar.jpg', pkgs:'>Panch Kedar' },
  { name: 'Rishikesh', image: '/images/Rishikesh_adve.jpg', pkgs:'>Rishikesh' },
  { name: 'Rudranath', image: '/images/rudranath.jpg', pkgs:'>Panch Kedar' },
  { name: 'Rishikesh', image: '/images/Rishikesh_adve2.jpg', pkgs:'>Rishikesh' },
  { name: 'Yamnotri', image: '/images/yamnotri.jpg', pkgs:'>Char Dham' },
  { name: 'Tungnath', image: '/images/tungnath.jpg', pkgs:'>Panch Kedar' },
  { name: 'Badrinath', image: '/images/Badrinath2.jpg', pkgs:'>Char Dham'},
  { name: 'Gangotri', image: '/images/gangotri.jpg', pkgs:'>Char Dham' },
];

export default function PopularDestinations() {
  const handleClick = () => {
    const section = document.getElementById('packages');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id = 'desti' className={styles.gallery}>
      <h2 className={styles.heading}>Popular Destinations</h2>
      <div className={styles.grid}>
        {destinations.map((dest, idx) => (
          <div key={idx} className={styles.card} onClick={handleClick}>
            <img src={dest.image} alt={dest.name} />
            <span>{dest.name} {dest.pkgs}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
