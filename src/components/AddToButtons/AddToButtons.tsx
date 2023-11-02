import styles from './AddToButtons.module.scss';
import button from '@/styles/modules/buttons.module.scss';
import 'animate.css';
import classNames from 'classnames';
import { useContext } from 'react';
import { FavoritesContext } from '@/contexts/FavoritesContextProvider';
import { CartObject } from '@/types/CartObject';
import { CartContext } from "@/contexts/CartContextProvider";
import { ProductToAdd } from "@/types/ProductToAdd";

interface Props {
  product: ProductToAdd;
}

export default function AddToButtons({ product }: Props) {
  const {
    itemId,
    name,
    price,
    category,
    image,
  } = product;

  const { cartItems, handleAddToCart } = useContext(CartContext);
  const { favorites, handleFavorites } = useContext(FavoritesContext);
  const isAddedInCart =  cartItems.some((item : CartObject) => item.itemId === itemId);

  const handleAddCartItem = () => {
    const productToAdd: CartObject = {
      itemId,
      name,
      price,
      image,
      category,
      count: 1
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
