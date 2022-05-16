import React from 'react';
import { ProductDetails } from '../../components';
import { client } from '../../lib/client';

const ProductList = ({ product, similarProducts }) => {
  return (
    <ProductDetails productData={product} similarProducts={similarProducts} />
  );
};

export default ProductList;

export const getStaticProps = async (context) => {
  const { slug } = context.params;
  // get the product that has slug = to slug paramter in url
  const productQuery = `*[_type == "products" && slug.current == '${slug}'][0]`;
  const product = await client.fetch(productQuery);

  // get similar product that has the same company property
  const similarProductQuery = `*[_type == "products" && slug.current != '${slug}' && company == '${product.company}']`;
  const similarProducts = await client.fetch(similarProductQuery);

  return {
    props: {
      product,
      similarProducts,
    },
  };
};

export const getStaticPaths = async () => {
  // get all slug property for all products
  const productQuery = `*[_type == "products"]{
    slug {
      current
    }
  }`;
  const slugs = await client.fetch(productQuery);

  const paths = slugs.map((slug) => ({
    params: {
      slug: slug.slug.current,
    },
  }));

  return {
    paths: paths,
    fallback: 'blocking',
  };
};
