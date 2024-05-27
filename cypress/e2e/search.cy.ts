/// <reference types="cypress" />
let lugarIda = ["madrid", "MAD"]
let lugarVuelta = ["barcelona", "BCN"]
let fechaIda = "2024-05-16";
let fechaVuelta = "2024-05-23";
let idaFormatada = formatearFecha(fechaIda)
let vueltaFormatada = formatearFecha(fechaVuelta)
let pasajeros = "2 adult"

print
describe('Flights', () => {
  
  // TestBusqueda: Testea la busqueda de vuelos con comprobación de vuelo, fecha y pasajeros
  it('Search Works OK', () => {
    cy.visit('https://qa-codium-course.netlify.app/');
    cy.get('#where-are-you-going-portal').click();
    cy.get('#where-are-you-going #' + lugarIda[0]).click();
    cy.get('#to-where-are-you-going-portal').click();
    cy.get('#to-where-are-you-going #' + lugarVuelta[0]).click();
    cy.get('.relative:nth-child(4) > .relative > .relative').type(fechaIda);
    cy.get('.relative:nth-child(5) > .relative > .relative').type(fechaVuelta);
    cy.get('#adults-add path').click();
    cy.get('.mt-5').click();
    cy.url().should('contains', 'https://qa-codium-course.netlify.app/search');
    cy.get('.mr-8').should('contain', lugarIda[1])
    cy.get('.mr-8').should('contain', lugarVuelta[1])
    cy.get("input[placeholder=\"Departure Date\"]").should('have.value', idaFormatada)
    cy.get("input[placeholder=\"Return Date\"]").should('have.value', vueltaFormatada)
    cy.get(".booking-bar__sub-heading").should('contain', pasajeros)
  });

  // TestLogin: Testea el flujo de login y comprueba que esté logado.
  it('Login Works OK', () => {
    cy.visit('https://qa-codium-course.netlify.app/search?from=MAD&to=BCN&checkIn=16%2F05%2F2024&checkOut=23%2F05%2F2024&guests-adults=2&guests-children=0&guests-infants=0');
    cy.get('.py-1').click();
    cy.get('.mb-4 .pl-2').click();
    cy.get('.mb-4 .pl-2').type('info@codium.team');
    cy.get('.flex:nth-child(4) .pl-2').click();
    cy.get('.flex:nth-child(4) .pl-2').type('codiumTest');
    cy.get('.block').click();
    cy.get('.bg-white:nth-child(1)').submit();
    cy.url().should('contains', 'https://qa-codium-course.netlify.app/');
    cy.get('.py-1').should('contain', 'Log out')
  });
});

//Formatea la fecha de 2024-06-25 -> 25/06/2024
function formatearFecha(fecha: string) {
  const [año, mes, dia] = fecha.split('-');
  return `${dia}/${mes}/${año}`
}