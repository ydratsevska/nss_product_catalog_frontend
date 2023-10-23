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
        <Link href="/" className="footer--logo">
          <Image
            src="/Logo.png"
            alt="Logo"
            width={89}
            height={32}
            />
        </Link>
      </div>

      <div className="footer--links">
        <a
          href="https://github.com/Koliras/nss_product_catalog_frontend"
          className="footer--links--element"
        >
          Github
        </a>

        <a
          href=""
          className="footer--links--element"
        >
          Contacts
        </a>

        <a
          href=""
          className="footer--links--element"
        >
          Rights
        </a>
      </div>

      <div
        className="footer--back"
        onClick={backToTop}
      >
        <p className="footer--back--text">
          Back to top
        </p>
      </div>
    </footer>
  );
}
