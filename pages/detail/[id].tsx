import React, { MouseEvent } from 'react';
import { GetServerSidePropsContext } from 'next';
import Image from 'next/image';
import axios, { AxiosAdapter } from 'axios';
import { cacheAdapterEnhancer } from 'axios-extensions';
import Head from 'next/head';
import { ProductItemType } from '../../types/Product';
import Button from '../../src/components/Button';

function Post({ item }: { item: ProductItemType }) {
  const { name, image_link, price, description, category, product_type } = item;
  return (
    <>
      <Head>
        <title>{item.name}</title>
        <meta name="description" content={item.description} />
      </Head>
      <div className="page-wrap">
        <div className="flex my-10 mx-0 ">
          <div className="flex-[200px_0_0]">
            <Image
              className="block"
              layout="fixed"
              width={160}
              height={180}
              src={image_link}
              alt={name}
            />
          </div>
          <div className="flex-[1_0_0]">
            <div className="font-bold text-[24px] mt-5">{name}</div>
            <div className="font-bold text-[#00bcd4] text-[34px]">${price}</div>
            <div className="text-[24px] mb-4">
              {category ? `${category}/` : ''}
              {product_type}
            </div>

            <Button
              color="#ff9c2f"
              content="구매하기"
              onClick={(e: MouseEvent<HTMLElement>) => {
                e.preventDefault();
              }}
            />
          </div>
        </div>
        <div className="text-[22px] font-bold pt-2 pb-1 border-t-[1px] border-solid border-gray-300">
          Description
        </div>
        <p style={{ paddingBottom: 20, fontSize: 18 }}>{description}</p>
      </div>
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
