'use client'
import { CartContext } from "@/contexts/CartContextProvider";
import { useContext, useEffect, useRef, useState } from "react";
import '@/app/globals.scss'
import button from '@/styles/modules/buttons.module.scss'
import './CheckoutModal.scss'

type Props = {
  isModalVisible: boolean,
  setIsModalVisible: (isVisible: boolean) => void,
};

export default function CheckoutModal({ isModalVisible, setIsModalVisible }: Props) {
  const checkoutRef = useRef<null | HTMLDialogElement>(null);
  const { setCartItems } = useContext(CartContext);
  const [isThanksVisible, setIsThanksVisible] = useState(false);

  useEffect(() => {
    if (isModalVisible) {
      checkoutRef.current?.showModal();
    } else {
      checkoutRef.current?.close();
    }
  }, [isModalVisible]);

  const onEsc = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsModalVisible(false);
    }
  }

  const closeModal = () => {
    setIsModalVisible(false);
  }

  const purchase = () => {
    setIsThanksVisible(true);
    setTimeout(() => {
      setIsModalVisible(false);
      setIsThanksVisible(false);
    }, 3000)
    setCartItems([]);
    localStorage.setItem('cart', JSON.stringify([]));
  }

  return (
    <dialog
      ref={checkoutRef}
      onKeyDown={onEsc}
      className="checkout"
    >
      {isThanksVisible ? (
        <p className="checkout__thanks">Thanks for the purchase</p>
      ) : (
        <div className="checkout__container">
          <div className="checkout__title">
            Are you sure you want to buy these products?
          </div>

          <div className="checkout__buttons">
            <button
              className={`${button.primary} checkout__buttons__element`}
              onClick={purchase}
            >Purchase</button>

            <button
              className={`${button.primary} checkout__buttons__element`}
              onClick={closeModal}
            >Cancel</button>
          </div>
        </div>
      )}
    </dialog>
  );
}
