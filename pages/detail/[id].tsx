import React, { useEffect } from 'react';
import { GetServerSidePropsContext } from 'next';
import axios, { AxiosAdapter } from 'axios';
import { cacheAdapterEnhancer } from 'axios-extensions';
import Head from 'next/head';
import { ProductDetailProvider } from '../../src/context/product-detail-context';
import { ProductItemType } from '../../types/Product';
import ProductDetail from '../../src/components/ProductDetail';

function Post({ item }: { item: ProductItemType }) {
  return (
    <>
      <Head>
        <title>{item.name}</title>
        <meta name="description" content={item.description} />
      </Head>

      <ProductDetailProvider>
        <ProductDetail item={item} />
      </ProductDetailProvider>
    </>
  );
}

export default Post;

export async function getServerSideProps(
  context: GetServerSidePropsContext<{ id: string }>
) {
  const id = context.params?.id;
  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const config = {
    Accept: 'application/json',
    headers: { 'Cache-Control': 'no-cache' },
    adapter: cacheAdapterEnhancer(axios.defaults.adapter as AxiosAdapter, {
      enabledByDefault: false
    })
  };
  const instance = axios.create(config);

  const res = await instance.get(API_URL, { cache: true });
  const data = res.data;

  return {
    props: {
      item: data
    }
  };
}
