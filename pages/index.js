import React from 'react';

import { client } from '../lib/client';

import { HeroBanner } from '../components';
import { FooterBanner } from '../components/';
import { ProductList } from '../components/';

const Home = ({ banners, products }) => {
  return (
    <div>
      <HeroBanner heroBanner={banners[1]} />
      <ProductList products={products} />
      <FooterBanner footBanner={banners[0]} />
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const bannerQuery = '*[_type == "banner"]';
  const banners = await client.fetch(bannerQuery);

  const productQuery = '*[_type == "products"]';
  const products = await client.fetch(productQuery);

  return {
    props: {
      banners,
      products,
    },
  };
};
