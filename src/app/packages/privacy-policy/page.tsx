import styles from './page.module.css';
import Header from '../../components/Header';
import Contact from '../../components/contact';

export default function Hero() {
  return (
    <main>
    <Header/>
    <div className={styles.r_t_wrapper}>
      <section className={styles.hero}>
        <div className={styles.content}>
          <h1 className={styles.title}>Privacy Policy</h1>
        </div>
      </section>
    </div>
    <div className={styles.r_t_plan}>
      <h1 className={styles.planTitle}>Travel Terms and Policies</h1>
      <p className={styles.subtitle}>✏Sightseeing of scheduled locations as per the itinerary, tailored to your preferences for comfort.</p>
      <p className={styles.subtitle}>✏All meals, including breakfast, lunch, and dinner as specified in the holiday package details varies based on the chosen package.</p>
      <p className={styles.subtitle}>✏ Accommodation options for single, double, or triple occupancy, depending on your preference.</p>
      <p className={styles.subtitle}>✏Children under 5 years can share their parent bed at no additional cost.</p>
      <p className={styles.subtitle}>✏All sightseeing, excursions, and transfers as per the agreed itinerary, using a dedicated private vehicle. Coverage of all transport, parking, and driver-related expenses.</p>
      <p className={styles.subtitle}>✏Inclusion of fuel costs, driver allowances, toll taxes, and similar expenses. All hotel charges and taxes covered.</p>
      <p className={styles.subtitle}>✏Inclusive of GST, IGST, SGST, and other government taxes.</p>
      <p className={styles.subtitle}>Access to a 24-hour customer service hotline for immediate assistance.</p>
      <p className={styles.subtitle}>✏Assistance with luggage and transport upon arrival at the designated destination. Transparent pricing with no hidden fees.</p>
      <p className={styles.subtitle}>✏This encouraged me to have connection with hotels, rental cars and all other areas which would be needed for my tourists.</p>
      <h1 className={styles.planTitle}>Expenses are not covered in the package</h1>
      <p className={styles.subtitle}>✏Any personal expenses, such as telephone calls/recharge, laundry/ironing, tips, drinks, mineral water, luggage portage, etc.</p>
      <p className={styles.subtitle}>✏Expenses not mentioned in the list of inclusions.</p>
      <p className={styles.subtitle}>✏ Costs related to any new additions to the itinerary, including sightseeing destinations not previously listed.</p>
      <p className={styles.subtitle}>✏Entrance fees to sights, parks, destinations, and guide charges.</p>
      <p className={styles.subtitle}>✏Expenses resulting from natural disasters (e.g., landslides, strikes, political unrest), where the customer must pay on the spot.</p>
      <p className={styles.subtitle}>✏Additional costs due to fuel price hikes, airline tax increases, or other factors affecting transportation and accommodation costs, which may arise after arrival and before departure.</p>
      <p className={styles.subtitle}>✏ Purchases of electronic gadgets like chargers, cameras, and other devices, minor or major.</p>
    </div>
    <Contact/>
    </main>
  );
}