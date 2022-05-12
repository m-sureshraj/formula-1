import type { SeasonResult, SeasonChampion } from '../../libs/types';

interface Props {
  seasonResults: SeasonResult[];
  seasonChampion?: SeasonChampion;
}

export const Result = ({ seasonResults, seasonChampion }: Props) => {
  const championDriverCode = seasonChampion?.driver.code;

  return (
    <>
      {seasonChampion && (
        <main>
          <h2>World Champion</h2>
          <p>
            Name: {seasonChampion.driver.givenName} {seasonChampion.driver.familyName}
          </p>
          <p>Nationality: {seasonChampion.driver.nationality}</p>
          <p>Total Wins: {seasonChampion.wins}</p>
          <p>Total Points: {seasonChampion.points}</p>
        </main>
      )}

      {seasonResults.map(result => (
        <div
          key={result.round}
          className={championDriverCode === result.winner.driverCode ? 'champion' : ''}
        >
          <h3>Name: {result.raceName}</h3>
          <p>Date: {result.date}</p>
          <p>Round: {result.round}</p>
          <br />

          <p>
            Winner Name: {result.winner.givenName} {result.winner.familyName}
          </p>
          <p>Duration: {result.winner.duration}</p>
          <p>Laps: {result.winner.laps}</p>
          <hr />
        </div>
      ))}
    </>
  );
};
