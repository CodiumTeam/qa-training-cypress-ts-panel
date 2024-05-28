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
  it.skip('Search Works OK', () => {
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
  it('Pago Works OK', () => {
    cy.visit('https://qa-codium-course.netlify.app/');
    cy.get('.fill-current').click();
    cy.get('.py-1').click();
    cy.get('.mb-4 .pl-2').type('info@codium.team');
    cy.get('.flex:nth-child(4) .pl-2').type('codiumTest');
    cy.get('.block').click();
    cy.get('.bg-white:nth-child(1)').submit();
    cy.url().should('contains', 'https://qa-codium-course.netlify.app/');
    cy.get('#where-are-you-going-portal').click();
    cy.get('#where-are-you-going #madrid').click();
    cy.get('.md\3Arounded-full').click();
    cy.get('#to-where-are-you-going-portal').click();
    cy.get('#to-where-are-you-going #barcelona').click();
    cy.get('.relative:nth-child(4) > .relative > .relative').click();
    cy.get('.relative:nth-child(4) > .relative > .relative').click();
    cy.get('.relative:nth-child(4) > .relative > .relative').click();
    cy.get('.relative:nth-child(4) path').click();
    cy.get('.relative:nth-child(4) > .relative > .relative').type('2024-05-28');
    cy.get('.relative:nth-child(5) > .relative > .relative').type('2024-05-31');
    cy.get('.mt-5').click();
    cy.url().should('contains', 'https://qa-codium-course.netlify.app/search');
    cy.get('.flight-card:nth-child(1) .flight-card__cta').click();
    cy.url().should('contains', 'https://qa-codium-course.netlify.app/checkout');
    cy.get('#card-holder').click();
    cy.get('#card-holder').type('Edgar oller');
    cy.get('#card-no').click();
    cy.get('#card-no').type('4');
    cy.get('.grid').click();
    cy.get('#card-no').type('4111111111111111');
    cy.get('.rounded-md:nth-child(2)').click();
    cy.get('.rounded-md:nth-child(2)').type('{backspace}');
    cy.get('.rounded-md:nth-child(2)').type('03/33');
    cy.get('.cursor-pointer').click();
    cy.get('.mb-8').dblclick();
    cy.url().should('contains', 'https://qa-codium-course.netlify.app/ticket');
    cy.get('.Home_container__bCOhY > .bg-white').click();
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