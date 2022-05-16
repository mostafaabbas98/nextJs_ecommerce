import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

import styles from '../styles/FooterBanner.module.css';

const FooterBanner = ({ footBanner }) => {
  return (
    <div className={styles.footBanner_Container}>
      <img
        src={urlFor(footBanner.image)}
        alt="Picture of the author"
        width={500}
        height={500}
      />
      <div className={styles.footBanner_detila}>
        <p>sale {footBanner.sale}% off</p>
        <h1>{footBanner.name}</h1>
        <Link href={`/products/${footBanner.slug.current}`}>
          <button className="btn">shop now</button>
        </Link>
      </div>
    </div>
  );
};

export default FooterBanner;
