import { NextPage } from 'next';
import axios from 'axios';
import Head from 'next/head';

interface ListItemType {
  id: number;
  name: string;
  brand: string;
  price: string;
  image_link: string;
  description: string;
  created_at: Date;
}
type ListType = Array<ListItemType>;

interface HomeProps {
  list: ListType;
}

const Home: NextPage<HomeProps> = ({ list }) => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home 입니다." />
      </Head>
      <section className="page-wrap">
        <a className="nav-item">aaa</a>
      </section>
    </>
  );
};

export async function getServerSideProps() {
  const API_URL =
    'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';
  const res = await axios.get(API_URL);
  const data: ListType = res.data;

  return {
    props: {
      list: data
    }
  };
}

export default Home;
