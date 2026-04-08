"use client";
import { useRef } from "react";
import styles from "./Reviews.module.css";

type Review = {
  text: string;
  author: string;
};

const reviews: Review[] = [
  {
    text: "Pavlo is a great volleyball coach. His teaching style is interactive and fun, and he actively demonstrates techniques during practice. My daughter found him easy to learn from, and as a family, we highly recommend him.",
    author: "Parent",
  },
  {
    text: "My daughter really enjoys the practices. She has learned new skills, especially in serving and blocking, and found the sessions very helpful. We truly appreciate the coaching and support.",
    author: "Parent",
  },
  {
    text: "Even though she is one of the youngest in the group, we’ve seen a huge improvement in her skills and confidence over the past few months. The knowledge and guidance make a real difference.",
    author: "Parent",
  },
  {
    text: "She has so much fun learning at every practice and looks forward to coming back. We’ve already recommended these training sessions to friends.",
    author: "Parent",
  },
  {
    text: "Our daughter loved her first class. The training was fun, engaging, and focused on proper technique. Highly recommended.",
    author: "Parent",
  },
];

function Arrow({ direction = "right" }: { direction?: "left" | "right" }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      style={{
        transform: direction === "left" ? "rotate(180deg)" : "none",
      }}
    >
      <path
        d="M8 5l8 7-8 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Reviews() {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    const current = sliderRef.current;
    if (!current) return;

    const firstCard = current.firstElementChild as HTMLElement | null;
    if (!firstCard) return;

    const cardWidth = firstCard.offsetWidth + 16;

    current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className={styles.reviewsSection}>
      <div className={`${styles.reviewsContainer} container`}>
        <h2 className={styles.title}>Reviews</h2>
        {/* <div className={styles.wrapper}> */}
        {/* Left Arrow */}
        <button
          className={styles.arrowLeft}
          onClick={() => scroll("left")}
          aria-label="Scroll left"
        >
          <Arrow direction="left" />
        </button>

        {/* Slider */}
        <div className={styles.slider} ref={sliderRef}>
          {reviews.map((item, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.stars}>★★★★★</div>

              <p className={styles.text}>{item.text}</p>

              <div className={styles.line}></div>

              <p className={styles.author}>{item.author}</p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          className={styles.arrowRight}
          onClick={() => scroll("right")}
          aria-label="Scroll right"
        >
          <Arrow direction="right" />
        </button>
      </div>
    </section>
  );
}
