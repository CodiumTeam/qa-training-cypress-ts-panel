/// <reference types="cypress" />

print
describe('Flights', () => {
  //Snapshot
  it('Prueba de Snapshot', () => {
    cy.visit('https://qa-codium-course.netlify.app/');
    cy.get('#main-block').compareSnapshot({name: 'flights-app-full'});
  });
});
