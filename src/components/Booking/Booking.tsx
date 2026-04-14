import css from "./Booking.module.css";

type BookingSectionProps = {
  email?: string;
  facebookUrl?: string;
};

export default function Booking({
  email = "your@email.com",
  facebookUrl = "#",
}: BookingSectionProps) {
  return (
    <section className={css.section} id="booking">
      <div className={css.container}>
        <div className={css.card}>
          <h2 className={css.title}>Book a Training</h2>
          <p className={css.text}>
            Have questions or want to book a volleyball training? Send a message
            or contact us directly.
          </p>

          <div className={css.content}>
            <form className={css.form}>
              <label className={css.label}>
                <input
                  className={css.input}
                  type="text"
                  name="name"
                  placeholder="Name"
                />
              </label>

              <label className={css.label}>
                <input
                  className={css.input}
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </label>

              <label className={css.label}>
                <textarea
                  className={`${css.input} ${css.textarea}`}
                  name="message"
                  placeholder="Message"
                  rows={5}
                />
              </label>

              <button className={css.button} type="submit">
                Send Message
                <span className={css.arrow} aria-hidden="true">
                  →
                </span>
              </button>
            </form>

            <div className={css.contact}>
              <h3 className={css.contactTitle}>Contact us</h3>
              <p className={css.contactText}>Available in multiple cities.</p>

              <ul className={css.contactList}>
                <li className={css.contactItem}>
                  <a className={css.contactLink} href={`mailto:${email}`}>
                    <span className={css.icon} aria-hidden="true">
                      ✉️
                    </span>
                    <span>Email: {email}</span>
                  </a>
                </li>

                <li className={css.contactItem}>
                  <a
                    className={css.contactLink}
                    href={facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className={css.icon} aria-hidden="true">
                      f
                    </span>
                    <span>Facebook</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
