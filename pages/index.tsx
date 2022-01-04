import { GetServerSidePropsContext, NextPage } from 'next';
import axios, { AxiosAdapter } from 'axios';
import Head from 'next/head';
import { ProductItemType } from '../types/Product';
import ProductList from '../src/components/ProductList';
import { cacheAdapterEnhancer } from 'axios-extensions';

type ProductsType = Array<ProductItemType>;

interface HomeProps {
  list: ProductsType;
}

const Home: NextPage<HomeProps> = ({ list }) => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home 입니다." />
      </Head>
      <section className="page-wrap">
        <div className="text-xl font-bold pt-10">베스트 상품</div>
        <div className="w-full border-b-2 border-neutral-200 mt-4 mb-4" />
        <ProductList list={list.slice(0, 9)} />
        <div className="text-xl font-bold pt-10">신상품</div>
        <div className="w-full border-b-2 border-neutral-200 mt-4 mb-4" />
        <ProductList list={list.slice(9)} />
      </section>
    </>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  context.res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );

  const API_URL =
    'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';
  const res = await axios.get(API_URL);
  const data: ProductItemType = res.data;

  return {
    props: {
      list: data
    }
  };
}

export default Home;
