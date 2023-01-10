describe('Checkout', () => {
  it.skip('Should be able to buy a flight from Madrid to Barcelona', () => {
    cy.visit('https://qa-codium-course.netlify.app/');
    cy.get('#where-are-you-going-portal').click();
    cy.get('#where-are-you-going #madrid').click();
    cy.get('#to-where-are-you-going #barcelona').click();
    cy.get('.relative:nth-child(4) > .relative > .relative').type('2023-01-19');
    cy.get('.relative:nth-child(5) > .relative > .relative').type('2023-01-21');
    cy.get('.mt-5').click();
    cy.url().should('contains', 'https://qa-codium-course.netlify.app/search');
    cy.get('.flight-card:nth-child(2) .flight-card__cta').click();
    cy.url().should('contains', 'https://qa-codium-course.netlify.app/login');
    cy.get('.mb-4 .pl-2').click();
    cy.get('.mb-4 .pl-2').type('info@codium.team');
    cy.get('.flex:nth-child(4) .pl-2').type('codiumTest');
    cy.get('.block').click();
    cy.get('.bg-white:nth-child(1)').submit();
    cy.url().should('contains', 'https://qa-codium-course.netlify.app/checkout');
    cy.get('#card-holder').click();
    cy.get('#card-holder').type('codium team');
    cy.get('#card-no').click();
    cy.get('#card-no').type('4111111111111111');
    cy.get('.rounded-md:nth-child(2)').type('03/25');
    cy.get('.cursor-pointer').click();
    cy.get('.mb-8').click();
    cy.url().should('contains', 'https://qa-codium-course.netlify.app/ticket');
  });

  it('Should show flight summary in the checkout page', () => {
    cy.visit('https://qa-codium-course.netlify.app/');
    cy.get('#where-are-you-going-portal').click();
    cy.get('#where-are-you-going #madrid').click();
    cy.get('#to-where-are-you-going #barcelona').click();
    cy.get('.relative:nth-child(4) > .relative > .relative').type('2023-01-19');
    cy.get('.relative:nth-child(5) > .relative > .relative').type('2023-01-21');
    cy.get('.mt-5').click();
    cy.url().should('contains', 'https://qa-codium-course.netlify.app/search');
    cy.get('.flight-card:nth-child(2) .flight-card__cta').click();
    cy.url().should('contains', 'https://qa-codium-course.netlify.app/login');
    cy.get('.mb-4 .pl-2').click();
    cy.get('.mb-4 .pl-2').type('info@codium.team');
    cy.get('.flex:nth-child(4) .pl-2').type('codiumTest');
    cy.get('.block').click();
    cy.get('.bg-white:nth-child(1)').submit();
    cy.get('.flight-card__city').dblclick();
    cy.get('.flight-card__price').dblclick();
  });
});