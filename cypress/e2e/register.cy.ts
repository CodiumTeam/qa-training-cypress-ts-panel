describe('Register page', () => {
  it('Should be able to register a new user coming from Home page', () => {
    const randomUserId = Date.now();
    cy.visit('https://qa-codium-course.netlify.app/');
    cy.get('.rounded-lg').click();
    cy.get('div:nth-child(1) > .px-5').click();
    cy.get('div:nth-child(1) > .px-5').type('Cypress');
    cy.get('div:nth-child(2) > .px-5').type('Test');
    cy.get('div:nth-child(3) > .w-full').type(`new-random-${randomUserId}@codium.team`);
    cy.get('div:nth-child(4) > .w-full').type('codiumTest');
    cy.get('span').click();
    cy.get('.grid').submit();
    cy.get('.text-sm > a').click();
    cy.get('.mb-4 .pl-2').click();
    cy.get('.mb-4 .pl-2').type(`new-random-${randomUserId}@codium.team`);
    cy.get('.flex:nth-child(4) .pl-2').type('codiumTest');
    cy.get('.block').click();
    cy.get('.bg-white:nth-child(1)').submit();
    cy.url().should('contains', 'https://qa-codium-course.netlify.app/');
  });

  it('Should view "User already exists" message when tries to register with an existing user', () => {
    cy.visit('https://qa-codium-course.netlify.app/register');
    cy.get('div:nth-child(1) > .px-5').dblclick();
    cy.get('div:nth-child(1) > .px-5').type('Codium');
    cy.get('div:nth-child(2) > .px-5').type('Team');
    cy.get('div:nth-child(3) > .w-full').type('info@codium.team');
    cy.get('div:nth-child(4) > .w-full').type('codiumTest');
    cy.get('span').click();
    cy.get('.grid').submit();
    cy.get('.text-red-700').dblclick();
  });
});