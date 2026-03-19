import styles from "./About.module.css";

type AboutProps = {
  id?: string;
};

export default function About({ id = "about" }: AboutProps) {
  return (
    <section className={styles.aboutSection} id={id}>
      <svg
        className={`${styles.aboutBall} ${styles.aboutBallLeft}`}
        aria-hidden="true"
      >
        <use href="/icon/symbol-defs.svg#volleyball_ball" />
      </svg>

      <svg
        className={`${styles.aboutBall} ${styles.aboutBallRight}`}
        aria-hidden="true"
      >
        <use href="/icon/symbol-defs.svg#volleyball_ball" />
      </svg>

      <svg
        className={`${styles.aboutBall} ${styles.aboutBallBottom}`}
        aria-hidden="true"
      >
        <use href="/icon/symbol-defs.svg#volleyball_ball" />
      </svg>

      <div className={`${styles.aboutContainer} container`}>
        <div className={styles.aboutCard}>
          <h2 className={styles.aboutTitle}>About the coach</h2>

          <p className={styles.aboutCoach}>
            Professional volleyball coach with international playing experience
            in Ukraine and Europe.
          </p>

          <p className={styles.aboutText}>
            Training focuses on strong fundamentals, proper technique, and
            confidence building, helping athletes develop skills, discipline,
            and game understanding in a positive and supportive environment for
            kids, teens, and adults.
          </p>
        </div>

        <div className={styles.aboutPhotoWrap}>
          <picture>
            <source
              media="(min-width: 1440px)"
              srcSet="/img/about/about-desk.jpg"
            />

            <source
              media="(min-width: 768px)"
              srcSet="/img/about/about-tab.jpg"
            />

            <img
              className={styles.aboutPhoto}
              src="/img/about/about-mob.jpg"
              alt="Volleyball coach"
              loading="lazy"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
