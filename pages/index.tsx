import { MouseEventHandler } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import { ProductItemType } from '../types/Product';
import ProductList from '../src/components/ProductList';

type ProductsType = Array<ProductItemType>;

const Home: NextPage = () => {
  const fetchData: () => Promise<ProductsType> = async () => {
    const res = await axios.get(
      'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline'
    );
    return res.data;
  };
  const { data: list } = useQuery('product-list', () => fetchData());

  const postTest = async () => {
    await axios.post('/api/test');
  };
  const queryClient = useQueryClient();
  const mutation = useMutation(postTest, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries('product-list');
    }
  });
  const onClickTitle: MouseEventHandler<HTMLDivElement> = event => {
    event.preventDefault();
    mutation.mutate();
  };

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home 입니다." />
      </Head>
      {Array.isArray(list) && list.length > 0 && (
        <section className="page-wrap">
          <div className="text-xl font-bold pt-10" onClick={onClickTitle}>
            베스트 상품
          </div>
          <div className="w-full border-b-2 border-neutral-200 mt-4 mb-4" />
          <ProductList list={list.slice(0, 9)} />
          <div className="text-xl font-bold pt-10">신상품</div>
          <div className="w-full border-b-2 border-neutral-200 mt-4 mb-4" />
          <ProductList list={list.slice(9)} />
        </section>
      )}
    </>
  );
};

export default Home;
