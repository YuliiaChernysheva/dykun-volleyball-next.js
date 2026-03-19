import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContainer} container`}>
        <p className={styles.copy}>&copy; 2025 Volleyball Training</p>

        <h2 className={styles.title}>Train. Improve. Play with confidence.</h2>

        <p className={styles.text}>Contact us anytime.</p>

        <ul className={styles.contactList}>
          <li className={styles.contactItem}>
            <a href="mailto:your@email.com" className={styles.link}>
              <svg className={styles.icon} aria-hidden="true">
                <use href="/icon/symbol-defs.svg#email"></use>
              </svg>
              <span>Email: your@email.com</span>
            </a>
          </li>

          <li className={styles.contactItem}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <svg className={styles.icon} aria-hidden="true">
                <use href="/icon/symbol-defs.svg#facebook"></use>
              </svg>
              <span>Facebook</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
