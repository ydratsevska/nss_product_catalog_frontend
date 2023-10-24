'use client';

import Image from "next/image";
import './Footer.scss'
import Link from "next/link";

export default function Footer() {
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <footer className="footer">
      <div>
        <Link href="/" className="footer__logo">
          <Image
            src="/Logo.png"
            alt="Logo"
            width={89}
            height={32}
            />
        </Link>
      </div>

      <div className="footer__links">
        <a
          href="https://github.com/Koliras/nss_product_catalog_frontend"
          className="footer__links__element"
        >
          Github
        </a>

        <a
          href=""
          className="footer__links__element"
        >
          Contacts
        </a>

        <a
          href=""
          className="footer__links__element"
        >
          Rights
        </a>
      </div>

      <div
        className="footer__back"
        onClick={backToTop}
      >
        <p className="footer__back__text">
          Back to top
        </p>
        <div className="footer__back__image">
          <Image
            src="/icons/Arrow-up-active.svg"
            alt="Arrow up"
            width={16}
            height={16}
          />
        </div>
      </div>
    </footer>
  );
}
