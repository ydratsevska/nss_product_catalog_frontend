import styles from './AddToButtons.module.scss'
import button from "@/styles/modules/buttons.module.scss";
import classNames from "classnames";
import {useContext} from "react";
import {FavoritesContext} from "@/app/contexts/FavoritesContextProvider";
import {CartObject} from "@/types/CartObject";
import {Product} from "@/types/Product";
import {ProductDescriptive} from "@/types/ProductDescriptive";

interface Props {
  product: Product
}

export default function AddToButtons({ product }: Props) {
  const { id, name, fullPrice, price, screen, capacity, ram, image } = product;
  const { favorites: favorites, setFavorites } = useContext(FavoritesContext);

  const handleFavorites = (id: number) => {
    const newFavourites = favorites.includes(id)
      ? favorites.filter((fav) => fav !== id)
      : [...favorites, id];

    setFavorites(newFavourites);
    localStorage.setItem('favorites', JSON.stringify(newFavourites));
  };

  const handleAddToCart = () => {
    const cartDataString = localStorage.getItem('cart');
    const existingCart = cartDataString ? JSON.parse(cartDataString) : [];

    const productToAdd = {
      id,
      name,
      price,
      image,
      count: 1
    };

    const existingProductIndex = existingCart.findIndex((item: CartObject) => item.id === id);

    if (existingProductIndex !== -1) {
      existingCart[existingProductIndex].quantity++;
    } else {
      existingCart.push(productToAdd);
    }

    localStorage.setItem('cart', JSON.stringify(existingCart));

  };

  return (
    <div className={styles.wrapper}>
      <button
        className={button.primary}
        onClick={handleAddToCart}
      >
        Add to cart
      </button>

      <button
        className={classNames(button.favorite, {
          [button.favorite_selected]: favorites.includes(id),
        })}
        onClick={() => handleFavorites(id)}
      ></button>
    </div>
  )
}
