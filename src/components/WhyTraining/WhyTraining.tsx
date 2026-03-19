import styles from "./WhyTraining.module.css";

const points = [
  "Training adapted to each age group and skill level",
  "Strong focus on technique, confidence, and steady progress",
  "Small groups that support better learning and development",
  "Friendly, respectful, and motivating training environment",
];

export default function WhyTraining() {
  return (
    <section className={styles.section}>
      <div className={`${styles.trainingContainer} container`}>
        <div className={styles.textBlock}>
          <h2 className={styles.title}>Why Choose This Training</h2>

          <ul className={styles.list}>
            {points.map((item, index) => (
              <li key={index} className={styles.item}>
                <span className={styles.check}>✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.imageBlock}>
          <picture>
            {/* desktop */}
            <source
              srcSet="/img/training/why-training-desk.jpg"
              media="(min-width: 1200px)"
            />

            {/* tablet */}
            <source
              srcSet="/img/training/why-training-tab.jpg"
              media="(min-width: 768px)"
            />

            {/* mobile */}
            <img
              src="/img/training/why-training-mob.jpg"
              alt="Volleyball training"
              className={styles.image}
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
