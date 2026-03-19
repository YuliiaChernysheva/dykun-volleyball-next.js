"use client";

import { useState } from "react";
import styles from "./TrainingPrograms.module.css";
import Image from "next/image";

type Slide = {
  id: string;
  meta1: string;
  meta2: string;
  meta3: string;
  text: string;
  img: string;
  imgAlt: string;
};

const slides: Slide[] = [
  {
    id: "kids",
    meta1: "Kids / Teens / Adults",
    meta2: "For: Ages 9–12, 13–16",
    meta3: "Format: Age-based groups",
    text: "Training programs adapted to age, experience, and physical development, focusing on healthy progress and long-term growth.",
    img: "/img/programs/kids-mob.jpg",
    imgAlt: "Kids volleyball training",
  },
  {
    id: "group",
    meta1: "Group Training",
    meta2: "For: Kids, teens, adults",
    meta3: "Format: Small groups",
    text: "Group sessions designed to improve teamwork, game understanding, and  confidence in a motivating training environment.",
    img: "/img/programs/group-mob.jpg",
    imgAlt: "Group volleyball training",
  },
  {
    id: "individual",
    meta1: "Individual Training",
    meta2: "For: Kids, teens, adults",
    meta3: "Format: One-on-one sessions",
    text: "Personalized training focused on individual goals, technique improvement, and skill development with full attention from the coach.",
    img: "/img/programs/indiv-mob.jpg",
    imgAlt: "Individual volleyball training",
  },
];

export default function TrainingPrograms() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(slides.length - 1, i + 1));

  const current = slides[index];

  return (
    <section className={styles.section} id="programs">
      <div className={`${styles.trainingContainer} container`}>
        <h2 className={styles.sectionTitle}>Training Programs</h2>

        <div className={styles.mobile}>
          <ProgramCard
            item={current}
            onPrev={prev}
            onNext={next}
            isPrevDisabled={index === 0}
            isNextDisabled={index === slides.length - 1}
          />
        </div>

        <ul className={styles.desktop}>
          {slides.map((item) => (
            <li key={item.id} className={styles.desktopItem}>
              <ProgramCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ProgramCard({
  item,
  onPrev,
  onNext,
  isPrevDisabled,
  isNextDisabled,
}: {
  item: Slide;
  onPrev?: () => void;
  onNext?: () => void;
  isPrevDisabled?: boolean;
  isNextDisabled?: boolean;
}) {
  return (
    <article className={styles.card}>
      <p className={styles.meta}>
        <span className={styles.metaLine1}>{item.meta1}</span>
        <span className={styles.metaLine2}>{item.meta2}</span>
      </p>

      <p className={styles.text}>{item.text}</p>

      <div className={styles.media}>
        {onPrev && (
          <button
            className={`${styles.arrow} ${styles.arrowLeft}`}
            type="button"
            onClick={onPrev}
            disabled={isPrevDisabled}
            aria-label="Previous"
          >
            <svg width="18" height="18" aria-hidden="true">
              <use href="/icon/symbol-defs.svg#arrow-right" />
            </svg>
          </button>
        )}

        <Image
          className={styles.image}
          src={item.img}
          alt={item.imgAlt}
          width={350}
          height={350}
        />

        {onNext && (
          <button
            className={`${styles.arrow} ${styles.arrowRight}`}
            type="button"
            onClick={onNext}
            disabled={isNextDisabled}
            aria-label="Next"
          >
            <svg width="18" height="18" aria-hidden="true">
              <use href="/icon/symbol-defs.svg#arrow-left" />
            </svg>
          </button>
        )}
      </div>
    </article>
  );
}
