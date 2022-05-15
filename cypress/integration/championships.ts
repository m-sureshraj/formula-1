import { API_ENDPOINT } from '../../libs/consts';

describe('Formula 1 App - Championships Page', () => {
  beforeEach(() => {
    // url has already configured via cypress.json
    cy.visit('/');
  });

  it('displays logo and a link to the application sourcecode', () => {
    cy.get('[data-test=logo]').should('be.visible');

    const element = cy.get('[data-test=application-source]');
    element
      .invoke('attr', 'href')
      .should('eq', 'https://github.com/m-sureshraj/formula-1');
  });

  it('displays F1 world championships starting from 2005 to Now', () => {
    cy.get('[data-test=title]').should('have.text', 'F1 World Champions Result');

    const currentYear = new Date().getFullYear();
    cy.get('#championship-list li').first().contains(`${currentYear}`);

    const startYear = 2005;
    cy.get('#championship-list li').last().contains(`${startYear}`);
  });

  it('sorts championship list from oldest to recent', () => {
    cy.get('[data-test=sort-dropdown]').select('old');

    cy.get('#championship-list li').first().contains('2005');

    const currentYear = new Date().getFullYear();
    cy.get('#championship-list li').last().contains(`${currentYear}`);
  });

  it('persists sorting order between page navigation', () => {
    cy.intercept(`${API_ENDPOINT}/2005/results/*`, {
      fixture: 'season-results',
    }).as('getSeasonResults');

    cy.intercept(`${API_ENDPOINT}/2005/driverStandings.json`, {
      fixture: 'driver-standings',
    }).as('getDriverStandings');

    // sort the list
    cy.get('[data-test=sort-dropdown]').select('old');

    // open the oldest season (2005) results
    cy.get('#championship-list li').first().click();

    // Wait for requests to be loaded
    cy.wait(['@getSeasonResults', '@getDriverStandings']);

    // go back to home page
    cy.get('[data-test=logo]').click();

    // the list still shows 2005 as the first item
    cy.get('#championship-list li').first().contains('2005');
  });
});

// workaround to fix TS' `isolatedModules` warning:
// Cannot be compiled under '--isolatedModules' because it is considered a global script file
// https://bobbyhadz.com/blog/typescript-cannot-be-compiled-under-isolatedmodules

export {};
