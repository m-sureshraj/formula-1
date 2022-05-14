import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';

import { getSeasonsList } from '../libs/util';
import { Championships } from '../components/Championships';

interface Props {
  seasons: number[];
}

const Home: NextPage<Props> = ({ seasons }) => {
  return (
    <>
      <Head>
        <title>Formula 1</title>
      </Head>

      <Championships seasons={seasons} />
    </>
  );
};

// The home page will be pre generated (SSG) when bundling for production.
export const getStaticProps: GetStaticProps<Props> = () => {
  return {
    props: {
      seasons: getSeasonsList(),
    },
  };
};

export default Home;
