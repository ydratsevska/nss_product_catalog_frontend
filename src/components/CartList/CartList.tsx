import styles from '../../styles/modules/page.module.scss';
import { CartObject } from '@/types/CartObject';
import { CartItem } from '../CartItem/CartItem';

export default function CartList({ products }: { products: CartObject[] }) {
  return (
    <div className={styles.cart}>
      {!!products.length ? (
        products.map((product) => (
          <CartItem cartObject={product} key={product.itemId} />
        ))
      ) : (
        <div
          className={styles.no_products_message}
          style={{
            marginTop: '32px',
          }}
        >
          It seems, there are no products
        </div>
      )}
    </div>
  );
};
