export default {
  name: 'products',
  title: 'Products',
  type: 'document',
  fields: [
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
    },
    {
      name: 'imageList',
      title: 'Image List',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'string',
    },
    {
      name: 'launch',
      title: 'Launch',
      type: 'date',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'string',
    },
    {
      name: 'operating',
      title: 'Operating System',
      type: 'string',
    },
    {
      name: 'memory',
      title: 'Memory',
      type: 'string',
    },
    {
      name: 'display',
      title: 'Display',
      type: 'string',
    },
    {
      name: 'camera',
      title: 'Camera',
      type: 'string',
    },
    {
      name: 'ram',
      title: 'RAM',
      type: 'string',
    },
    {
      name: 'battery',
      title: 'Battery',
      type: 'string',
    },
    // {
    //   name: 'rate',
    //   title: 'Rate',
    //   type: 'number',
    //   options: {
    //     list: [
    //       { value: 5, title: '5 stars' },
    //       { value: 4, title: '4 stars' },
    //       { value: 3, title: '3 stars' },
    //       { value: 2, title: '2 stars' },
    //       { value: 1, title: '1 star' },
    //     ],
    //   },
    // },
  ],
};
