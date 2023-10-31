'use client'

import cart from './page.module.scss';
import grid from 'src/styles/modules/grid.module.scss';
import titles from 'src/styles/modules/titles.module.scss';
import style from '../../components/BreadCrumbs/BreadCrumbs.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import arrowLeft from '../../../public/icons/Arrow-left.svg';
import CartList from '@/components/CartList/CartList';
import { CartObject } from '@/types/CartObject';
import button from '../../styles/modules/buttons.module.scss';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Cart() {
 //  const router = useRouter();
  const [cartItems, setCartItems] = useState<CartObject[]>([]);

  useEffect(() => {
    const cartDataString = localStorage.getItem('cart');
    setCartItems(cartDataString ? JSON.parse(cartDataString) : []);
  }, []);


  return (
    <div className={grid.template}>
      <div className={style.wrapper}>
        <div
          className={cart.back}
         // onClick={() => router.back()}
        >
          <Image src={arrowLeft} alt={'back link'} />
          Back
        </div>
      </div>
      <h1 className={titles.main}>Cart</h1>
      <CartList products={cartItems} />

      <div className={cart.total}>
        <span className={cart.price}>$2657</span>
        <span className={cart.items}>Total for 3 items</span>

        <hr className={cart.line} />

        <button className={button.primary}>Checkout</button>
      </div>
    </div>
  );
}
