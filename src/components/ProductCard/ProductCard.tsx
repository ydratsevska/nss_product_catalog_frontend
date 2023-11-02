'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './ProductCard.module.scss';
import { Product } from '@/types/Product';
import AddToButtons from '@/components/AddToButtons/AddToButtons';
import classNames from "classnames";
import {URL_BASE} from "@/utils/constants";

type Props = {
  product: Product;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  const { id, name, category, fullPrice, price, screen, capacity, ram, image } =
    product;

  return (
    <div className={styles.card}>
      <Link
        href={`/${category}/[id]`}
        as={`/${category}/${id}`}
        className={styles.card__link_wrapper}
      >
        <Image
          alt='Phone Image'
          src={`${URL_BASE}/${image}`}
          className={styles.card__image}
          width={250}
          height={250}
        />

        <div className={styles.card__container_name}>
          <p className={styles.card__name}>{name}</p>
        </div>

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
      </Link>

      <AddToButtons product={product} />
    </div>
  );
};
