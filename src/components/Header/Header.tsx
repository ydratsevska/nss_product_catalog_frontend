'use client';
import { useState, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from './Navbar';
import Logo from './../../../public/Logo.png';
import FavoriteIcon from './../../../public/icons/Favourites.svg';
import ShoppingBagIcon from './../../../public/icons/Shopping-bag.svg';
import closeIcon from './../../../public/icons/Close.svg';
import burgerMenuIcon from './../../../public/icons/Menu.svg';

import './Header.scss';
import './Navbar.scss';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import { FavoritesContext } from '../../app/contexts/FavoritesContextProvider';

export default function Header() {
  const { favorites } = useContext(FavoritesContext);
  const [isActive, setIsActive] = useState(false);
  const pathName = usePathname();

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
            href='/favorites'
            prefetch={true}
            className={classNames('header__icon', 'header__icon--favorite', {
              'header__icon--active': pathName === '/favorites',
            })}
          >
            <Image
              src={FavoriteIcon}
              width={16}
              height={16}
              alt='Favorite Icon'
            />
            {!!favorites.length && (
              <span className='header__icon__amount'>{favorites.length}</span>
            )}
          </Link>

          <Link
            href='/cart'
            prefetch={true}
            className={classNames('header__icon', 'header__icon--basket', {
              'header__icon--active': pathName === '/cart',
            })}
          >
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
            isActive ? 'header__burger-menu--active' : 'header__burger-menu'
          }
          onClick={() => setIsActive(!isActive)}
        >
          {<Navbar />}

          <div className='header__burger-menu-icons-bottom'>
            <Link
              href='/favorites'
              prefetch={true}
              className={classNames('header__burger-menu-icon-bottom', {
                'header__burger-menu-icon-bottom--active':
                  pathName === '/favorites',
              })}
              onClick={() => setIsActive(!isActive)}
            >
              <Image
                src={FavoriteIcon}
                width={16}
                height={16}
                alt='Favorite Icon'
              />
              {!!favorites.length && (
                <span className='header__burger-menu-icon-bottom__amount header__burger-menu-icon-bottom__amount_favorite'>
                  {favorites.length}
                </span>
              )}
            </Link>
            <Link
              href='/cart'
              prefetch={true}
              className={classNames('header__burger-menu-icon-bottom', {
                'header__burger-menu-icon-bottom--active': pathName === '/cart',
              })}
              onClick={() => setIsActive(!isActive)}
            >
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
}
