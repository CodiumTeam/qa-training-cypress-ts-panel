describe('Login', () => {
  it('Should be able to log in from Home page', () => {
    cy.visit('https://qa-codium-course.netlify.app/');
    cy.get('.py-1').click();
    cy.get('.mb-4 > .flex').click();
    cy.get('.mb-4 .pl-2').click();
    cy.get('.mb-4 .pl-2').type('codium@team.com');
    cy.get('.flex:nth-child(4) .pl-2').type('codiumTest');
    cy.get('.block').click();
    cy.get('.bg-white:nth-child(1)').submit();
    cy.url().should('contains', 'https://qa-codium-course.netlify.app/');
  });

  it('Should show Required message under password field', () => {
    cy.visit('https://qa-codium-course.netlify.app/login');
    cy.get('.mb-4 .pl-2').click();
    cy.get('.mb-4 .pl-2').type('codium@team.com');
    cy.get('.block').click();
    cy.get('.bg-white:nth-child(1)').submit();
    cy.get('.text-red-700').dblclick();
  });


});