describe('Register page', () => {
  it('Should be able to register a new user coming from Home page', () => {
    cy.visit('https://qa-codium-course.netlify.app/');
    const randomUserId = Date.now();
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

  describe('From Register Page', () => {
    beforeEach(() => {
      cy.visit('https://qa-codium-course.netlify.app/register');
    });

    it('Should view "User already exists" message when tries to register with an existing user', () => {
      cy.findByLabelText('First Name').type('Codium');
      cy.findByLabelText('Last name').type('Team');
      cy.findByLabelText('Email address').type('info@codium.team');
      cy.findByLabelText('Password').type(`codiumTest`);
      cy.findByRole('button', {name: 'Sign Up'}).click();

      cy.findByText(/user already exists/i).should('be.visible');
    });

    it('Should view "Required" message for all fields when user tries to register without filling fields', () => {
      cy.findByRole('button', {name: 'Sign Up'}).click();

      cy.findAllByText('Required').should('have.length', 4);
      cy.findAllByText('Required').should('be.visible');
    });
  });
});