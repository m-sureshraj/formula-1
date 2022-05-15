import seasonResults from '../fixtures/season-results.json';
import driverStandings from '../fixtures/driver-standings.json';
import { API_ENDPOINT } from '../../libs/consts';

const races = seasonResults.MRData.RaceTable.Races;

const seasonChampion =
  driverStandings.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver;

// List of races won by the season champion
const racesWonBySeasonChamp = races.filter(
  race => race.Results[0].Driver.code === seasonChampion.code
);

describe('Formula 1 App - Season page', () => {
  beforeEach(() => {
    cy.visit('/');

    // mock network requests
    cy.intercept(`${API_ENDPOINT}/*/results/*`, {
      fixture: 'season-results',
    }).as('getSeasonResults');

    cy.intercept(`${API_ENDPOINT}/*/driverStandings.json`, {
      fixture: 'driver-standings',
    }).as('getDriverStandings');
  });

  it('displays loading placeholder while waiting for the data', () => {
    cy.get('#championship-list li a[href="/season/2022"]').click();

    const loader = cy.get('[data-test=loader]');
    loader.should('be.visible');

    // Wait for requests to be loaded
    cy.wait(['@getSeasonResults', '@getDriverStandings']);

    cy.get('[data-test=loader]').should('not.exist');
  });

  it('shows the list of winners for every race for the selected year', () => {
    cy.get('#championship-list li a[href="/season/2022"]').click();

    cy.get('[data-test=season-title]').contains(`Season Winners, 2022`);
    cy.get('[data-test=navigation]').should('be.visible');
    cy.get('[data-test=result]').should('have.length', races.length);

    const [firstRow] = races;
    const [driver] = firstRow.Results;
    const driverName = `${driver.Driver.givenName} ${driver.Driver.familyName}`;

    cy.get('[data-test=result]')
      .first()
      .find('[data-test=race-name]')
      .should('have.text', firstRow.raceName);

    cy.get('[data-test=result]')
      .first()
      .find('[data-test=winner-name]')
      .contains(driverName);
  });

  it('highlights all race rows won by the season champion', () => {
    cy.get('#championship-list li a[href="/season/2022"]').click();

    cy.get('[data-test=champion-label]').should(
      'have.length',
      racesWonBySeasonChamp.length
    );
  });

  describe('navigation', () => {
    it('disables the next season button if the current season is the latest one', () => {
      cy.get('#championship-list li a[href="/season/2022"]').click();

      cy.get('[data-test=next-season]').should('be.disabled');
    });

    it('disables the previous season button if the current season is the oldest one', () => {
      cy.get('#championship-list li a[href="/season/2005"]').click();

      cy.get('[data-test=prev-season]').should('be.disabled');
    });

    it('navigates to the previous seasons', () => {
      const startSeason = 2022;

      cy.get(`#championship-list li a[href="/season/${startSeason}"]`).click();

      cy.get('[data-test=prev-season]').click();
      cy.get('[data-test=season-title]').contains(`Season Winners, ${startSeason - 1}`);

      cy.get('[data-test=prev-season]').click();
      cy.get('[data-test=season-title]').contains(`Season Winners, ${startSeason - 2}`);
    });

    it('navigates to the next seasons', () => {
      const startSeason = 2010;

      cy.get(`#championship-list li a[href="/season/${startSeason}"]`).click();

      cy.get('[data-test=next-season]').click();
      cy.get('[data-test=season-title]').contains(`Season Winners, ${startSeason + 1}`);

      cy.get('[data-test=next-season]').click();
      cy.get('[data-test=season-title]').contains(`Season Winners, ${startSeason + 2}`);
    });
  });
});

export {};
