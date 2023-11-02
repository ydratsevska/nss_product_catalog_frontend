import styles from './CartItem.module.scss';
import Image from 'next/image';
import phoneImage from '../ProductCard/phoneImage.png';
import { CartObject } from '@/types/CartObject';
import { useContext } from 'react';
import { CartContext } from '@/contexts/CartContextProvider';
import Link from 'next/link';

type Props = {
  cartObject: CartObject;
};

export const CartItem: React.FC<Props> = ({ cartObject }) => {
  const {
    itemId,
    image,
    name,
    price,
    count,
  } = cartObject;

  const { handleDeleteFromCart, changeCount } = useContext(CartContext);

  return (
    <div className={styles.item}>
      <div className={styles.item__group}>
        <span
          onClick={() => handleDeleteFromCart(itemId)}
          className={`${styles.item__icon} ${styles.item__icon_close}`}
        ></span>
        <Link href={`phones/${itemId}`} className={styles.item__link}>
        <Image
          alt='Phone Image'
          src={`https://nss-product-catalog-api.onrender.com/${image}`}
          className={styles.item__image}
          width={66}
          height={66}
        />
        <span className={styles.item__text}>
          {name}
        </span>
        </Link>
      </div>

      <div className={styles.item__pair}>
        <div className={styles.item__group}>
          <span
          onClick={() => changeCount(itemId, -1)}
            className={`${styles.item__icon} ${styles.item__icon_minus} ${styles.item__icon_border}`}
          ></span>
          <span className={`${styles.item__text} ${styles.item__text_count}`}>
            {count}
          </span>
          <span
            onClick={() => changeCount(itemId, 1)}
            className={`${styles.item__icon} ${styles.item__icon_plus} ${styles.item__icon_border}`}
          ></span>
         <span className={styles.item__price}>${price * count}</span>
        </div>

      </div>
    </div>
  );
};
