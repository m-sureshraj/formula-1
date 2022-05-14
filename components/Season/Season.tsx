import type { FC } from 'react';
import { useQuery } from 'react-query';

import { getRaceResults, getDriverStandings } from '../../libs/data';
import { Result } from './Result';
import { Headline } from '../ui/Headline';
import { Loader } from './Loader';
import { Navigation } from './Navigation';
import styles from './Season.module.scss';

interface Props {
  year: number;
}

export const Season: FC<Props> = ({ year }) => {
  // the following queries will execute in parallel
  const raceResultsQuery = useQuery(['raceResults', year], () => getRaceResults(year));
  const seasonChampionQuery = useQuery(['driverStanding', year], () =>
    getDriverStandings(year)
  );

  if (raceResultsQuery.isLoading || seasonChampionQuery.isLoading) {
    return (
      <div className={styles.container}>
        <Loader />
      </div>
    );
  }

  if (raceResultsQuery.error || seasonChampionQuery.error) {
    // todo: Use alert component
    return <p>An error has occurred while fetching season data.</p>;
  }

  const results = raceResultsQuery.data ?? [];

  // todo: Use alert component
  if (results.length === 0) {
    return <p>Unable to fetch the data</p>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Headline>🚩 &nbsp;&nbsp;Season Winners, {year}</Headline>
        <Navigation year={year} />
      </div>
      <Result seasonChampion={seasonChampionQuery.data} seasonResults={results} />
    </div>
  );
};
