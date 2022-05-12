interface Winner {
  wikiUrl: string;
  driverCode: string;
  givenName: string;
  familyName: string;
  nationality: string;
  laps: string;
  duration: string;
}

export interface SeasonResult {
  season: string;
  round: string;
  raceName: string;
  date: string;
  winner: Winner;
}

export interface SeasonChampion {
  driver: {
    wikiUrl: string;
    code: string;
    givenName: string;
    familyName: string;
    nationality: string;
  };
  points: string;
  wins: string;
}

export interface RaceResultsResponse {
  MRData: {
    RaceTable: {
      Races: {
        season: string;
        round: string;
        raceName: string;
        date: string;
        Results: {
          laps: string;
          Time: {
            time: string;
          };
          Driver: {
            code: string;
            url: string;
            givenName: string;
            familyName: string;
            nationality: string;
          };
        }[];
      }[];
    };
  };
}

export interface DriverStandingsResponse {
  MRData: {
    StandingsTable: {
      StandingsLists: {
        round: string;
        DriverStandings: {
          points: string;
          wins: string;
          Driver: {
            code: string;
            url: string;
            givenName: string;
            familyName: string;
            nationality: string;
          };
        }[];
      }[];
    };
  };
}
