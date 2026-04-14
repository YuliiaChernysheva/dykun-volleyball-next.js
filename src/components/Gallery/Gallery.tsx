"use client";

import { useEffect, useState } from "react";
import css from "./Gallery.module.css";

type GalleryItem = {
  id: number;
  mob: string;
  tab: string;
  desk: string;
  alt: string;
};

type Props = {
  images: GalleryItem[];
};

export default function Gallery({ images }: Props) {
  const [index, setIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1440px)");

    const update = () => setIsDesktop(media.matches);

    update();
    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, []);

  const visible = isDesktop ? 3 : 1;
  const maxIndex = isDesktop
    ? Math.max(images.length - visible, 0)
    : images.length - 1;

  const prev = () => {
    setIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section className={css.section}>
      <h2 className={css.title}>Gallery</h2>

      <div className={css.wrapper}>
        {/* LEFT */}
        <button onClick={prev} className={css.arrow}>
          <svg width="24" height="24">
            <use href="/icon/symbol-defs.svg#arrow-right" />
          </svg>
        </button>

        {/* SLIDER */}
        <div className={css.viewport}>
          <ul
            className={css.track}
            style={{
              transform: `translateX(-${index * (100 / visible)}%)`,
            }}
          >
            {images.map((item) => (
              <li key={item.id} className={css.slide}>
                <picture>
                  <source media="(min-width: 1440px)" srcSet={item.desk} />
                  <source media="(min-width: 768px)" srcSet={item.tab} />
                  <img src={item.mob} alt={item.alt} />
                </picture>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT */}
        <button onClick={next} className={css.arrow}>
          <svg width="24" height="24">
            <use href="/icon/symbol-defs.svg#arrow-left" />
          </svg>
        </button>
      </div>
    </section>
  );
}
