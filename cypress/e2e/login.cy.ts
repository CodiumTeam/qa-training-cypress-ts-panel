describe('Login', () => {
    it('Should be able to log in from Home page', () => {
    cy.visit('https://qa-codium-course.netlify.app/');
    cy.findByRole('link', {
      name: /Log in/i
    }).click();

    cy.findByPlaceholderText('Email Address').type(`info@codium.team`);
    cy.findByPlaceholderText('Password').type('codiumTest');
    cy.findByRole('button', {name: 'Login'}).click();

    cy.url().should('contains', 'https://qa-codium-course.netlify.app/');
  });

  describe('From Login Page', () => {
    beforeEach(() => {
      cy.visit('https://qa-codium-course.netlify.app/login');
    });

    it('Should show Required message under password field', () => {
      cy.findByPlaceholderText('Email Address').type(`info@codium.team`);
      cy.findByRole('button', {name: 'Login'}).click();

      cy.findByText('Required').should('be.visible');
    });

    it('Should show Required message under email address field', () => {
      cy.findByPlaceholderText('Password').type('codiumTest');
      cy.findByRole('button', {name: 'Login'}).click();

      cy.findByText('Required').should('be.visible');
    });

    it('Should show Invalid credentials when user enters an invalid password for existing user', () => {
      cy.findByPlaceholderText('Email Address').type(`info@codium.team`);
      cy.findByPlaceholderText('Password').type('invalidPassword');
      cy.findByRole('button', {name: 'Login'}).click();

      cy.findByText('Invalid credentials').should('be.visible');
    });
  });
});