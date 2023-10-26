"use client";
import {useState} from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { Navbar } from './Navbar';
import Logo from './../../../public/Logo.png';
import {
  getIconBasket,
  getIconBurgerMenu,
  getIconClose,
  getIconFavorite
} from './../../utils/helperFunctions';

import './Header.scss';

export const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <header className="header">
      <div className="header__container">
      <div
        className="header__links"
      >
        <Link href="/" className="header__logo">
          <Image
            src={Logo}
            width={80}
            height={28}
            alt="logo"
          />
        </Link>
        <div className="header__navbar">
          {<Navbar />}
        </div>

      </div>

      <div className="header__icons">
        <Link
          href="/"
          className="header__icon header__icon--favorite"
        > {getIconFavorite()}
        </Link>

        <Link href="/" className="header__icon header__icon--basket">
          {getIconBasket()}
        </Link>
      </div>

      <div
        className="header__burger-menu-icon"
        onClick={() => setIsActive(!isActive)}
      >
        {!isActive
          ? (
            getIconBurgerMenu()
          ) : (
            getIconClose()
          )}
      </div>
      </div>

      {isActive && (
        <div className={
          isActive
            ? 'header__burger-menu--active'
            : 'header__burger-menu'
         }
        >
          {<Navbar />}

          <div className="header__burger-menu-icons-bottom">
          <Link href="/" className="header__burger-menu-icon-bottom">
            {getIconFavorite()}
          </Link>
          <Link href="/" className="header__burger-menu-icon-bottom">
            {getIconBasket()}
          </Link>
          </div>
        </div>
      )}
    </header>

  )
}
