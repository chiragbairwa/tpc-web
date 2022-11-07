import styles from "../styles/welcome.module.css";
import Image from "next/image";

const Welcome = () => {
  return (
    <div className={styles.welcome}>
      {/* BANNER */}
      <div className={styles.welcomeBanner}>
        <h2>DCSA Department</h2>
        <h2>Panjab University</h2>
      </div>

      {/* Hero Page */}
      <div className={styles.welcomeContent}>
        <div>
          <h1>Placement Portal</h1>
          <p>
            Passion is the difference between having a job or having a career.
          </p>
          {/* Button */}
          <a href="#" className={styles.welcomeCtaBtn}>
            <label>Placement Brocure</label>
            <Image
              src="/downloadIcon.svg"
              width="24"
              height="24"
              alt="download icon"
            />
          </a>
        </div>
        <Image src="/hero.svg" width="550" height="550" alt="TeamWork" />
      </div>
    </div>
  );
};

export default Welcome;
