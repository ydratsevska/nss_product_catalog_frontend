import phoneImage from './phoneImage.png';
import Image from 'next/image';
import styles from './ProductCard.module.scss';

export const ProductCard = () => {
  return (
    <div className={styles.card}>
      <Image
        alt='Phone Image'
        src={phoneImage}
        className={styles.card__image}
        layout="responsive"
      />
      <span className={styles.card__name}>
        Apple iPhone Xs 64GB Silver (iMT9G2FS/A)
      </span>
      <div className={styles.card__prices}>
        <span className={`${styles.card__price} ${styles.card__price_new}`}>
          $799
        </span>
        <span className={`${styles.card__price} ${styles.card__price_old}`}>
          $799
        </span>
      </div>

      <hr className={styles.card__line}/>

      <div className={styles.card__parameters}>
        <div className={styles.card__pair}>
          <span className={styles.card__parameter}>
            Screen
          </span>
          <span className={`${styles.card__parameter} ${styles.card__parameter_value}`}>
            5.8” OLED
          </span>
        </div>

        <div className={styles.card__pair}>
          <span className={styles.card__parameter}>
            Screen
          </span>

          <span className={`${styles.card__parameter} ${styles.card__parameter_value}`}>
            5.8” OLED
          </span>
        </div>

        <div className={styles.card__pair}>
          <span className={styles.card__parameter}>
            Screen
          </span>

          <span className={`${styles.card__parameter} ${styles.card__parameter_value}`}>
            5.8” OLED
          </span>
        </div>
      </div>

      <div className={styles.card__buttons}>
        <button className={styles.card__add}>
          Add to cart
        </button>

        <div className={styles.card__favorite}>
          <span className={`${styles.icon} ${styles.icon_heart}`}></span>
        </div>
      </div>
    </div>
  );
}
