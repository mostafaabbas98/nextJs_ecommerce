import React from 'react';
import {
  AiOutlineLeft,
  AiOutlineShopping,
  AiFillPlusSquare,
  AiFillMinusSquare,
} from 'react-icons/ai';
import { useRouter } from 'next/router';
import { useCartContext } from '../context/CartContext';
import { urlFor } from '../lib/client';
import styles from '../styles/Cart.module.css';

const Cart = () => {
  const router = useRouter();
  const {
    setShowCart,
    items,
    totalAmount,
    totalPrice,
    addItem,
    removeItem,
    clearCart,
  } = useCartContext();

  const addToCart = (item) => {
    addItem({ ...item, amount: 1 });
  };

  const removeFromCarrt = (id) => {
    removeItem(id);
  };

  const ceckoutCart = () => {
    clearCart();
    setShowCart(false);
    router.replace('/success');
  };
  return (
    <>
      <div className="overlay" />
      <div className={styles.cart_container}>
        <header>
          <button type="button" onClick={() => setShowCart(false)}>
            <AiOutlineLeft />({totalAmount} items)
          </button>
          <h2>Your Cart</h2>
        </header>
        {items.length === 0 && (
          <div className={styles.cart_body}>
            <AiOutlineShopping size="5rem" />
            <h2>Your Cart is empty</h2>

            <button
              type="button"
              className="btn"
              onClick={() => setShowCart(false)}
            >
              Continue Shopping
            </button>
          </div>
        )}
        {items.length >= 1 && (
          <div className={styles.cart_body}>
            {items?.map((item) => (
              <div className={styles.cart_item} key={item.id}>
                <img
                  src={urlFor(item.imglink)}
                  alt={item.title}
                  width={60}
                  height={60}
                />
                <div className={styles.cart_btns}>
                  <AiFillPlusSquare onClick={() => addToCart(item)} />
                  <p>{item.amount}</p>
                  <AiFillMinusSquare onClick={() => removeFromCarrt(item.id)} />
                </div>
                <div>
                  <h4>{item.title}</h4>
                  <p>EGP {item.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        {items.length >= 1 && (
          <div className={styles.cart_checkout}>
            <h4>Total Items: {totalAmount} items</h4>
            <h4>Total Price: EGP {totalPrice}</h4>
            <button className="btn" type="button" onClick={ceckoutCart}>
              checkout
            </button>
            <button className="btn" type="button" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
