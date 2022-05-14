import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';

import { getSeasonsList } from '../libs/util';
import { Championships } from '../components/Championships';

interface Props {
  seasons: number[];
}

const Home: NextPage<Props> = ({ seasons }) => {
  return (
    <div>
      <Head>
        <title>Formula 1</title>
        <meta
          name="description"
          content="Formula 1 championship results from 2005 to now"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Championships seasons={seasons} />
    </div>
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
