import { ProductCard } from '../ProductCard';
import styles from '../../styles/modules/page.module.scss';
import { CartObject } from '@/types/CartObject';
import { CartItem } from '../CartItem/CartItem';

export default function CartList({ products }: { products: CartObject[] }) {
  return (
    <div className={styles.cart}>
      {products.map((product) => (
        <CartItem cartObject={product} key={product.id} />
      ))}
    </div>
  );
}
