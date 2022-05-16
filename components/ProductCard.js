import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';
import { AiTwotoneShopping } from 'react-icons/ai';
import { useCartContext } from '../context/CartContext';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ productData }) => {
  const { addItem } = useCartContext();

  const addProductToCart = () => {
    addItem({
      id: productData._id,
      title: productData.name,
      price: productData.price,
      amount: 1,
      imglink: productData.mainImage,
    });
  };
  return (
    <div className={styles.productCard}>
      <div className={styles.badge}>New arrival</div>
      <div className={styles.productTumb}>
        <img src={urlFor(productData.mainImage)} alt="" />
      </div>
      <div className={styles.productDetails}>
        <span className={styles.productCatagory}>{productData.company}</span>
        <h4>
          <Link href={`/products/${productData.slug.current}`}>
            {productData.name}
          </Link>
        </h4>
        <div className={styles.productBottom_details}>
          <div className={styles.productPrice}>EGP {productData.price}</div>
          <button className={styles.productLinks} onClick={addProductToCart}>
            <AiTwotoneShopping />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
