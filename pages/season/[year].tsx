import { useRouter } from 'next/router';
import Head from 'next/head';

import { Season } from '../../components/Season';

const Page = () => {
  const {
    isReady,
    query: { year },
  } = useRouter();

  // Due to next.js hydration, the query value will get an empty object
  // on the initial render. https://stackoverflow.com/a/61043260/2967670
  if (!isReady) {
    return null;
  }

  if (!year) {
    return (
      <>
        <Head>
          <title>Formula 1 - Error</title>
        </Head>

        {/*todo: create an alert component*/}
        <p>Can not find the season data</p>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Formula 1 - Season {year}</title>
      </Head>

      <Season year={+year} />
    </>
  );
};

export default Page;
