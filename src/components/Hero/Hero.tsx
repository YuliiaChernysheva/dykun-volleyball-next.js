import css from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={css.heroSection}>
      <div className={`${css.heroContainer} container`}>
        <h1 className={css.heroTitle}>
          Build Skills. Build Confidence. Play Volleyball.
        </h1>

        <p className={css.heroText}>
          Professional volleyball training for kids, teens, and adults.
          Individual and small group sessions focused on real progress.
        </p>

        <button className={css.heroBtn} type="button">
          Book a Training
        </button>
      </div>
    </section>
  );
}
