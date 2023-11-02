import { ProductCard } from '../ProductCard';
import styles from '../../styles/modules/page.module.scss';
import { Product } from '@/types/Product';

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <div className={styles.products}>
      {!!products.length ? (
        products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))
      ) : (
        <div className={styles.no_products_message}>It seems, there are no products</div>
      )}
    </div>
  );
};
