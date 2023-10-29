import phoneImage from './phoneImage.png';
import Image from 'next/image';
import styles from './ProductCard.module.scss';
import button from '../../styles/modules/buttons.module.scss'
import { Product } from '@/types/Product';

type Props = {
  product: Product
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  const {
    name,
    fullPrice,
    price,
    screen,
    capacity,
    ram,
    image,
  } = product;
  return (
    <div className={styles.card}>
      <Image
        alt='Phone Image'
        src={`https://nss-product-catalog-api.onrender.com/${image}`}
        className={styles.card__image}
        width={ 250 }
        height={ 250 }
        // layout="responsive"
      />
      <span className={styles.card__name}>
        {name}
      </span>
      <div className={styles.card__prices}>
        <span className={`${styles.card__price} ${styles.card__price_new}`}>
          ${price}
        </span>
        <span className={`${styles.card__price} ${styles.card__price_old}`}>
          ${fullPrice}
        </span>
      </div>

      <hr className={styles.card__line}/>

      <div className={styles.card__parameters}>
        <div className={styles.card__pair}>
          <span className={styles.card__parameter}>
            Screen
          </span>
          <span className={`${styles.card__parameter} ${styles.card__parameter_value}`}>
            {screen}
          </span>
        </div>

        <div className={styles.card__pair}>
          <span className={styles.card__parameter}>
            Capacity
          </span>

          <span className={`${styles.card__parameter} ${styles.card__parameter_value}`}>
            {capacity}
          </span>
        </div>

        <div className={styles.card__pair}>
          <span className={styles.card__parameter}>
            RAM
          </span>

          <span className={`${styles.card__parameter} ${styles.card__parameter_value}`}>
            {ram}
          </span>
        </div>
      </div>

      <div className={styles.card__buttons}>
        <button className={button.primary}>
          Add to cart
        </button>

        <button className={button.favorite}>
        </button>
      </div>
    </div>
  );
}
