'use client'

import cart from './page.module.scss';
import grid from 'src/styles/modules/grid.module.scss';
import titles from 'src/styles/modules/titles.module.scss';
import style from '../../components/BreadCrumbs/BreadCrumbs.module.scss';
import Image from 'next/image';
import arrowLeft from 'public/icons/Arrow-left.svg';
import CartList from '@/components/CartList/CartList';
import button from '@/styles/modules/buttons.module.scss';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '@/contexts/CartContextProvider';
import CheckoutModal from '@/components/CheckoutModal/CheckoutModal';
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";

export default function Cart() {
  const { cartItems } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    let totalPriceTemp = 0;
    let totalItemsTemp = 0;
    cartItems.forEach(element => {
      totalPriceTemp += element.count * element.price
      totalItemsTemp += element.count
    });

    setTotalPrice(totalPriceTemp);
    setTotalItems(totalItemsTemp);
  }, [cartItems]);

  return (
    <div className={grid.template}>
      <BreadCrumbs category={'cart'} />

      <h1 className={titles.main}>Cart</h1>
      <CartList products={cartItems} />

      <div className={cart.total}>
        <span className={cart.price}>${totalPrice}</span>
        <span className={cart.items}>Total for {totalItems} items</span>

        <hr className={cart.line} />

        <button
          className={button.primary}
          onClick={() => setIsModalVisible(true)}
        >Checkout</button>

        <CheckoutModal
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
      </div>
    </div>
  );
}
