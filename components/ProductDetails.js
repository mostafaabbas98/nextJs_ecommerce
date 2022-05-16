import React, { useState } from 'react';
import {
  AiFillCalendar,
  AiFillMobile,
  AiFillAndroid,
  AiOutlineMobile,
  AiFillCamera,
} from 'react-icons/ai';
import { BsBatteryFull, BsFillCpuFill } from 'react-icons/bs';
import ProductList from './ProductList';
import { urlFor } from '../lib/client';
import { useCartContext } from '../context/CartContext';
import styles from '../styles/ProductDetails.module.css';

const ProductDetails = ({ productData, similarProducts }) => {
  const [imageInx, setimageInx] = useState(0);

  const { setShowCart, addItem } = useCartContext();

  const addItemtoCart = () => {
    addItem({
      id: productData._id,
      title: productData.name,
      price: productData.price,
      amount: 1,
      imglink: productData.mainImage,
    });
  };
  return (
    <>
      <div className={styles.productDetails_container}>
        <div className={styles.productDetails_gallery}>
          <div className={styles.productDetails_image}>
            <img
              src={urlFor(
                productData.imageList && productData.imageList[imageInx]
              )}
            />
          </div>
          <ul className={styles.imageList}>
            {productData.imageList?.map((image, i) => {
              return (
                <li key={image._key} className={styles.imageItem}>
                  <img
                    src={urlFor(image)}
                    alt={productData.name}
                    width={100}
                    height={100}
                    onMouseOver={() => setimageInx(i)}
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.productDes}>
          <h1>{productData.name}</h1>
          <h5>{productData.company}</h5>
          <h2>EGP {productData.price}</h2>
          <p>
            <AiFillCalendar />
            {productData.launch}
          </p>
          <p>
            <AiFillMobile />
            {productData.body}
          </p>
          <p>
            <AiFillAndroid />
            {productData.operating}
          </p>
          <p>
            <AiOutlineMobile />
            {productData.display}
          </p>
          <p>
            <BsBatteryFull />
            {productData.battery}
          </p>
          <p>
            <AiFillCamera />
            {productData.camera}
          </p>
          <p>
            <BsFillCpuFill />
            {productData.memory}
          </p>
          <p>
            <BsFillCpuFill />
            {productData.ram}
          </p>
          <button type="button" className="btn" onClick={addItemtoCart}>
            Add to Cart
          </button>
        </div>
      </div>
      <div className={styles.similarProducts}>
        <h2>Similar Mobiles from {productData.company}</h2>
        <ProductList products={similarProducts} />
      </div>
    </>
  );
};

export default ProductDetails;
