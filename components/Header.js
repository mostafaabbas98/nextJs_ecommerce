import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import Cart from './Cart';
import { useCartContext } from '../context/CartContext';
import styles from '../styles/Header.module.css';
import { Toaster } from 'react-hot-toast';
const Header = () => {
  const { showCart, setShowCart, totalAmount } = useCartContext();
  return (
    <nav className={styles.navbar_container}>
      <h1 className={styles.logo}>
        <Link href="/">Mobile Store</Link>
      </h1>
      <button
        type="button"
        className={styles.cart_icon}
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className={styles.cart_items_quant}>{totalAmount}</span>
      </button>
      {showCart && <Cart />}
    </nav>
  );
};

export default Header;
