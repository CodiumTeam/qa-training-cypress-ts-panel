/// <reference types="cypress" />

/* 
Variables
*/

let lugarIda = ["madrid", "MAD"]
let lugarVuelta = ["barcelona", "BCN"]
let fechaIda = "2024-05-16";
let fechaVuelta = "2024-05-23";
let idaFormatada = formatearFecha(fechaIda)
let vueltaFormatada = formatearFecha(fechaVuelta)
let pasajeros = "2 adult"

print
describe('Flights', () => {

  /* 
  Parametros
  */

  //Antes de cada test entrará a la pagina principal
  beforeEach(() => {
    cy.visit('https://qa-codium-course.netlify.app/');
  });
  //Despues de cada test...
  afterEach(() => {

  })

  /* 
  Tests
  */

  // TestBusqueda: Testea la busqueda de vuelos con comprobación de vuelo, fecha y pasajeros
  it('Search Works OK', () => {
    cy.get('input[name="from"]').click();
    cy.get('#where-are-you-going #' + lugarIda[0]).click();
    cy.get('#to-where-are-you-going-portal').click();
    cy.get('#to-where-are-you-going #' + lugarVuelta[0]).click();
    cy.findByPlaceholderText("Check in").type(fechaIda);
    cy.get("input[placeholder=\"Check out\"]").type(fechaVuelta);
    cy.get('#adults-add path').click();
    cy.findByRole('button', { name: /search/i }).click();
    cy.url().should('contains', 'https://qa-codium-course.netlify.app/search');
    cy.get('.mr-8').should('contain', lugarIda[1])
    cy.get('.mr-8').should('contain', lugarVuelta[1])
    cy.get("input[placeholder=\"Departure Date\"]").should('have.value', idaFormatada)
    cy.get("input[placeholder=\"Return Date\"]").should('have.value', vueltaFormatada)
    cy.get(".booking-bar__sub-heading").should('contain', pasajeros)
  });
  
  
  // TestLogin: Testea el flujo de login y comprueba que esté logado.
  it('Login Works OK', () => {
    cy.get('.py-1').click();
    cy.get('.mb-4 .pl-2').type('info@codium.team');
    cy.get('.flex:nth-child(4) .pl-2').type('codiumTest');
    cy.get('.block').click();
    cy.get('.bg-white:nth-child(1)').submit();
    cy.url().should('contains', 'https://qa-codium-course.netlify.app/');
    cy.findByText('Log out').should('exist')
  });

  //TestPago
  it.skip('Pago Works OK', () => {
    cy.get('#where-are-you-going-portal').click();
    cy.get('#where-are-you-going #madrid').click();
    cy.get('#to-where-are-you-going-portal').click();
    cy.get('#to-where-are-you-going #barcelona').click();
    cy.get('.relative:nth-child(4) > .relative > .relative').type('2024-05-15');
    cy.get('.relative:nth-child(5) > .relative > .relative').type('2024-05-22');
    cy.get('.mt-5').click();
    cy.url().should('contains', 'https://qa-codium-course.netlify.app/search');
    cy.get('.flight-card:nth-child(1) .flight-card__cta').click();
    cy.url().should('contains', 'https://qa-codium-course.netlify.app/checkout');
    cy.get('#card-holder').click();
    cy.get('#card-holder').type('{backspace}');
    cy.get('#card-holder').type('Edgar oller');
    cy.get('#card-no').type('{backspace}');
    cy.get('#card-no').type('{backspace}');
    cy.get('#card-no').type('1111222233334444');
    cy.get('.rounded-md:nth-child(2)').click();
    cy.get('.rounded-md:nth-child(2)').type('03/23');
    cy.get('.mb-8').click();
    cy.url().should('contains', 'https://qa-codium-course.netlify.app/ticket');
  });
});

/* 
Funciones
*/

//Formatea la fecha de 2024-06-25 -> 25/06/2024
function formatearFecha(fecha: string) {
  const [año, mes, dia] = fecha.split('-');
  return `${dia}/${mes}/${año}`
}