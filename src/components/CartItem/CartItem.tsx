import styles from './CartItem.module.scss'
import Image from 'next/image';
import phoneImage from '../ProductCard/phoneImage.png'

export const CartItem = () => {
  return (
    <div className={styles.item}>
      <div className={styles.item__group}>
      <span className={`${styles.item__icon} ${styles.item__icon_close}`}></span>
      <Image
        alt='Phone Image'
        src={phoneImage}
        className={styles.item__image}
      />
      <span className={styles.item__text}>Apple iPhone 14 Pro 128GB Silver (MQ023)</span>
      </div>

      <div className={styles.item__pair}>

      <div className={styles.item__group}>
        <span className={`${styles.item__icon} ${styles.item__icon_minus} ${styles.item__icon_border}`}></span>
        <span className={styles.item__text}>1</span>
        <span className={`${styles.item__icon} ${styles.item__icon_plus} ${styles.item__icon_border}` }></span>
      </div>

      <span className={styles.item__price}>$999</span>
      </div>
    </div>
  );
}
