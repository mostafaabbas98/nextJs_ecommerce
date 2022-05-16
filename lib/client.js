import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'ssvnpgl6',
  dataset: 'production',
  apiVersion: '2022-05-03',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  ignoreBrowserTokenWarning: true,
});

const bulider = imageUrlBuilder(client);

export const urlFor = (source) => bulider.image(source);
