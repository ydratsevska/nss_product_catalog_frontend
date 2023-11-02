import styles from './AddToButtons.module.scss';
import button from '@/styles/modules/buttons.module.scss';
import classNames from 'classnames';
import { useContext } from 'react';
import { FavoritesContext } from '@/contexts/FavoritesContextProvider';
import { CartObject } from '@/types/CartObject';
import { Product } from '@/types/Product';
import 'animate.css';
import { toast } from 'react-toastify';
import { CartContext } from '@/contexts/CartContextProvider';

interface Props {
  product: Product;
}

export default function AddToButtons({ product }: Props) {
  const {
    id,
    itemId,
    name,
    category,
    fullPrice,
    price,
    screen,
    capacity,
    ram,
    image,
  } = product;

  const { cartItems, handleAddToCart } = useContext(CartContext);
  const { favorites, handleFavorites } = useContext(FavoritesContext);
  const isAddedInCart = cartItems.some((item: CartObject) => item.id === id);

  const handleAddCartItem = () => {
    const productToAdd: CartObject = {
      id,
      name,
      price,
      image,
      count: 1,
    };

    handleAddToCart(productToAdd);
  };

  return (
    <div className={styles.wrapper}>
      <button
        className={classNames(button.primary, {
          [button.primary_selected]: isAddedInCart,
        })}
        onClick={handleAddCartItem}
      >
        {isAddedInCart ? 'In cart' : 'Add to cart'}
      </button>

      <button
        className={classNames(button.favorite, 'animate__animated', {
          [button.favorite_selected + ' animate__heartBeat']:
            favorites.includes(itemId),
        })}
        onClick={() => handleFavorites(itemId)}
      />
    </div>
  );
}
