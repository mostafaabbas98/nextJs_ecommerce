import React from 'react';
import Head from 'next/head';
import { Layout } from '../components';
import CartContext from '../context/CartContext';
import '../styles/globals.css';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }) {
  return (
    <CartContext>
      <Head>
        <title>Mobile Store</title>
        <meta name="description" content="nextJs ecommerce project" />
      </Head>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </CartContext>
  );
}

export default MyApp;
