"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "./Navbar";
import Logo from "./../../../public/Logo.png";
import FavoriteIcon from "./../../../public/icons/Favourites.svg";
import ShoppingBagIcon from "./../../../public/icons/Shopping-bag.svg";
import closeIcon from "./../../../public/icons/Close.svg";
import burgerMenuIcon from "./../../../public/icons/Menu.svg";

import "./Header.scss";
import "./Navbar.scss";

export const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <header className='header'>
      <div className='header__container'>
        <div className='header__links'>
          <Link href='/' className='header__logo'>
            <Image src={Logo} width={80} height={28} alt='logo' />
          </Link>
          <div className='header__navbar'>{<Navbar />}</div>
        </div>

        <div className='header__icons'>
          <Link
            href='/favourites'
            className='header__icon header__icon--favorite'
          >
            <Image
              src={FavoriteIcon}
              width={16}
              height={16}
              alt='Favorite Icon'
            />
          </Link>

          <Link href='/cart' className='header__icon header__icon--basket'>
            <Image
              src={ShoppingBagIcon}
              width={16}
              height={16}
              alt='Shopping Bag icon'
            />
          </Link>
        </div>

        <div
          className='header__burger-menu-icon'
          onClick={() => setIsActive(!isActive)}
        >
          {!isActive ? (
            <Image
              src={burgerMenuIcon}
              width={16}
              height={16}
              alt='Favorite Icon'
            />
          ) : (
            <Image src={closeIcon} width={16} height={16} alt='close icon' />
          )}
        </div>
      </div>

      {isActive && (
        <div
          className={
            isActive ? "header__burger-menu--active" : "header__burger-menu"
          }
        >
          {<Navbar />}

          <div className='header__burger-menu-icons-bottom'>
            <Link
              href='/favourites'
              className='header__burger-menu-icon-bottom'
            >
              <Image
                src={FavoriteIcon}
                width={16}
                height={16}
                alt='Favorite Icon'
              />
            </Link>
            <Link href='/cart' className='header__burger-menu-icon-bottom'>
              <Image
                src={ShoppingBagIcon}
                width={16}
                height={16}
                alt='Shopping Bag icon'
              />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
