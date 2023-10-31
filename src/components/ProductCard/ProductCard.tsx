'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './ProductCard.module.scss';
import button from '../../styles/modules/buttons.module.scss';
import { Product } from '@/types/Product';
import { useContext } from 'react';
import { FavoritesContext } from '@/app/contexts/FavoritesContextProvider';
import classNames from 'classnames';
import { CartObject } from '@/types/CartObject';

type Props = {
  product: Product;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  const { id, name, fullPrice, price, screen, capacity, ram, image } = product;

  const { favorites: favorites, setFavourites } = useContext(FavoritesContext);

  const handleFavorites = (id: number) => {
    const newFavourites = favorites.includes(id)
      ? favorites.filter((fav) => fav !== id)
      : [...favorites, id];

    setFavourites(newFavourites);
    localStorage.setItem('favorites', JSON.stringify(newFavourites));
  };

  const handleAddToCart = () => {
      const cartDataString = localStorage.getItem('cart');
      const existingCart = cartDataString ? JSON.parse(cartDataString) : [];

    const productToAdd = {
      id,
      name,
      price,
      image,
      count: 1
    };

    const existingProductIndex = existingCart.findIndex((item: CartObject) => item.id === id);

    if (existingProductIndex !== -1) {
      existingCart[existingProductIndex].quantity++;
    } else {
      existingCart.push(productToAdd);
    }

    localStorage.setItem('cart', JSON.stringify(existingCart));

  };

  return (
    <div className={styles.card}>
      <Link
        href='/phones/[id]'
        as={`/phones/${id}`}
      >
        <Image
          alt='Phone Image'
          src={`https://nss-product-catalog-api.onrender.com/${image}`}
          className={styles.card__image}
          width={250}
          height={250}
        />
      </Link>

      <span className={styles.card__name}>{name}</span>
      <div className={styles.card__prices}>
        <span className={`${styles.card__price} ${styles.card__price_new}`}>
          ${price}
        </span>
        <span className={`${styles.card__price} ${styles.card__price_old}`}>
          ${fullPrice}
        </span>
      </div>

      <hr className={styles.card__line} />

      <div className={styles.card__parameters}>
        <div className={styles.card__pair}>
          <span className={styles.card__parameter}>Screen</span>
          <span
            className={`${styles.card__parameter} ${styles.card__parameter_value}`}
          >
            {screen}
          </span>
        </div>

        <div className={styles.card__pair}>
          <span className={styles.card__parameter}>Capacity</span>

          <span
            className={`${styles.card__parameter} ${styles.card__parameter_value}`}
          >
            {capacity}
          </span>
        </div>

        <div className={styles.card__pair}>
          <span className={styles.card__parameter}>RAM</span>

          <span
            className={`${styles.card__parameter} ${styles.card__parameter_value}`}
          >
            {ram}
          </span>
        </div>
      </div>

      <div className={styles.card__buttons}>
      <button
          className={button.primary}
          onClick={handleAddToCart}
        >
          Add to cart
        </button>

        <button
          className={classNames(button.favorite, {
            [button.favorite_selected]: favorites.includes(id),
          })}
          onClick={() => handleFavorites(id)}
        ></button>
      </div>
    </div>
  );
};
