"use client";

import Link from "next/link";
import css from "./Header.module.css";

export default function Header() {
  return (
    <header className={css.headerSection}>
      <div className={`${css.headerContainer} container`}>
        <nav className={css.headerNav}>
          <Link href="/" className={css.headerLogoLink}>
            <svg className={css.headerLogo}>
              <use className={css.headerLogoIcon} href="/favicon.svg"></use>
            </svg>
          </Link>

          <ul className={css.headerNavList}>
            <li className={css.headerNavItem}>
              <a className={css.headerNavLink} href="#about-section">
                About the coach
              </a>
            </li>
            <li className={css.headerNavItem}>
              <a className={css.headerNavLink} href="#programs-section">
                Training programs
              </a>
            </li>
            <li className={css.headerNavItem}>
              <a className={css.headerNavLink} href="#reviews-section">
                Reviews
              </a>
            </li>
            <li className={css.headerNavItem}>
              <a className={css.headerNavLink} href="#contact-section">
                Contacts
              </a>
            </li>
          </ul>
        </nav>

        <button type="button" className={css.burgerBtn}>
          <svg className={css.burgerIcon} width="40" height="40">
            <use
              className={css.burgerSvg}
              href="/icon/symbol-defs.svg#burger-menu"
            ></use>
          </svg>
        </button>
      </div>
    </header>
  );
}
