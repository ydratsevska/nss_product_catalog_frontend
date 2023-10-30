import { ProductCard } from '../ProductCard';
import styles from '../../styles/modules/page.module.scss';
import { Product } from '@/types/Product';

export default function ProductList({ products }: { products: Product[] }) {
  return !!products.length
    ? (
    <div className={styles.products}>
      {products.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
          />
      ))}
    </div>
    ) : (
      <div className={styles.no_products_message}>It seems, there is no products</div>
    );
}
