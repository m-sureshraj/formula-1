import { API_ENDPOINT } from './consts';
import type {
  SeasonResult,
  RaceResultsResponse,
  DriverStandingsResponse,
  SeasonChampion,
} from './types';

export async function getRaceResults(year: number): Promise<SeasonResult[]> {
  const url = `${API_ENDPOINT}/${year}/results/1.json`;
  const response = await fetch(url);

  // todo: handle error res.ok
  const seasonResults: RaceResultsResponse = await response.json();

  return seasonResults.MRData.RaceTable.Races.map(race => {
    const [winner] = race.Results;

    return {
      season: race.season,
      round: race.round,
      raceName: race.raceName,
      date: race.date,
      winner: {
        driverCode: winner.Driver.code,
        wikiUrl: winner.Driver.url,
        givenName: winner.Driver.givenName,
        familyName: winner.Driver.familyName,
        nationality: winner.Driver.nationality,
        laps: winner.laps,
        duration: winner.Time.time,
      },
    };
  });
}

export async function getDriverStandings(year: number): Promise<SeasonChampion> {
  const url = `${API_ENDPOINT}/${year}/driverStandings.json`;
  const response = await fetch(url);

  // todo: handle error res.ok
  const driverStandings: DriverStandingsResponse = await response.json();

  const [standing] = driverStandings.MRData.StandingsTable.StandingsLists;
  const [champion] = standing.DriverStandings;

  return {
    points: champion.points,
    wins: champion.wins,
    driver: {
      code: champion.Driver.code,
      wikiUrl: champion.Driver.url,
      givenName: champion.Driver.givenName,
      familyName: champion.Driver.familyName,
      nationality: champion.Driver.nationality,
    },
  };
}
