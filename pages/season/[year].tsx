import { useRouter } from 'next/router';

import { Season } from '../../components/Season';

const Page = () => {
  const {
    isReady,
    query: { year },
  } = useRouter();

  if (!isReady) {
    return null;
  }

  if (!year) {
    // todo: create an alert component
    return <p>Can not find the season data</p>;
  }

  return <Season year={+year} />;
};

export default Page;
