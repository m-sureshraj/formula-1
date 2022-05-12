import { useRouter } from 'next/router';

import { Season } from '../../components/season';

const Page = () => {
  const {
    isReady,
    query: { year },
  } = useRouter();

  if (!isReady) {
    return null;
  }

  if (!year) {
    // todo: better design
    return <p>can not find the season data</p>;
  }

  return <Season year={+year} />;
};

export default Page;
