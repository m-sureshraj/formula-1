import { useQuery } from 'react-query';

import { getRaceResults, getDriverStandings } from '../../libs/data';
import { Result } from './Result';

interface Props {
  year: number;
}

export const Season = ({ year }: Props) => {
  // the following queries will execute in parallel
  const raceResultsQuery = useQuery(['raceResults', year], () => getRaceResults(year));
  const seasonChampionQuery = useQuery(['driverStanding', year], () =>
    getDriverStandings(year)
  );

  if (raceResultsQuery.isLoading || seasonChampionQuery.isLoading) {
    // todo: better loading indicator
    return <p>Loading..</p>;
  }

  if (raceResultsQuery.error || seasonChampionQuery.error) {
    // todo: proper error component
    return <p>An error has occurred: </p>;
  }

  const results = raceResultsQuery.data ?? [];

  if (results.length === 0) {
    return <p>Unable to fetch the data</p>;
  }

  return (
    <div>
      <h1>Season {year} Results</h1>
      <Result seasonChampion={seasonChampionQuery.data} seasonResults={results} />
    </div>
  );
};
