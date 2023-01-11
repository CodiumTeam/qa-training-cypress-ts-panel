describe('Register page', () => {
  it('Should be able to register a new user coming from Home page', () => {
    const randomUserId = Date.now();
    cy.visit('https://qa-codium-course.netlify.app/');
    cy.findByRole('link', {
      name: /Register/i
    }).click();

    cy.findByLabelText('First Name').type('Cypress');
    cy.findByLabelText('Last name').type('Test');
    cy.findByLabelText('Email address').type(`new-random-${randomUserId}@codium.team`);
    cy.findByLabelText('Password').type(`codiumTest`);
    cy.findByRole('button', {name: 'Sign Up'}).click();
    cy.findByRole('link', {
      name: 'Log in'
    }).click();
    cy.findByPlaceholderText('Email Address').type(`new-random-${randomUserId}@codium.team`);
    cy.findByPlaceholderText('Password').type('codiumTest');
    cy.findByRole('button', {name: 'Login'}).click();

    cy.url().should('contains', 'https://qa-codium-course.netlify.app/');
  });

  it('Should view "User already exists" message when tries to register with an existing user', () => {
    cy.visit('https://qa-codium-course.netlify.app/register');

    cy.findByLabelText('First Name').type('Codium');
    cy.findByLabelText('Last name').type('Team');
    cy.findByLabelText('Email address').type('info@codium.team');
    cy.findByLabelText('Password').type(`codiumTest`);
    cy.findByRole('button', {name: 'Sign Up'}).click();

    cy.get('.text-red-700').dblclick();
  });

  it('Should view "Required" message for all fields when user tries to register without filling fields', () => {
    cy.visit('https://qa-codium-course.netlify.app/register');

    cy.findByRole('button', {name: 'Sign Up'}).click();

    cy.get('div:nth-child(1) > .text-red-700').dblclick();
    cy.get('div:nth-child(2) > .text-red-700').dblclick();
    cy.get('div:nth-child(3) > .text-red-700').dblclick();
    cy.get('div:nth-child(4) > .text-red-700').dblclick();
  });
});