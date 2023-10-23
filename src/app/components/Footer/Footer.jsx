import Image from "next/image";
import './Footer.scss'

export default function Footer() {
  return (
    <footer className="footer">
      <Image
        src="/Logo.png"
        alt="Logo"
        width={89}
        height={32}
      />

      <div>
        <a href="https://github.com/Koliras/nss_product_catalog_frontend">
          Github
        </a>

        <a href="">
          Contacts
        </a>

        <a href="">
          Rights
        </a>
      </div>

      <div>
        <p>Back to top</p>
      </div>
    </footer>
  );
}
