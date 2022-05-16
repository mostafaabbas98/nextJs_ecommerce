import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '../lib/client';

import styles from '../styles/HeroBanner.module.css';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className={styles.heroBanner_container}>
      <img src={urlFor(heroBanner.image)} alt="Picture of the author" />
      <div className={styles.heroBanner_detila}>
        <p>sale {heroBanner.sale}% off</p>
        <h1>{heroBanner.name}</h1>
        <Link href={`/products/${heroBanner.slug.current}`}>
          <button>shop now</button>
        </Link>
      </div>
    </div>
  );
};

export default HeroBanner;
