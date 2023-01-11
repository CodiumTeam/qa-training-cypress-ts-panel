describe('Download App', () => {
  it('Show download App suggestion banner appear on iPhone 8', () => {
    cy.viewport('iphone-8');

    cy.visit('https://qa-codium-course.netlify.app/', {
      headers: {
        'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1',
      }
    });

    cy.findByRole('suggestion').should('be.visible');
    cy.findByText(/Move over the world with Flights on iOS/i)
      .should('be.visible');
    cy.findByRole('button', {name: 'Download on App Store'})
      .should('be.visible');
  });

  it('Show download App suggestion banner appear on Samsung S10 Android', () => {
    cy.viewport('samsung-s10');

    cy.visit('https://qa-codium-course.netlify.app/', {
      headers: {
        'user-agent': 'Mozilla/5.0 (Linux; Android 9; SM-G960F Build/PPR1.180610.011) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Mobile Safari/537.36',
      }
    });

    cy.findByRole('suggestion').should('be.visible');
    cy.findByText(/Move over the world with Flights on Android/i)
      .should('be.visible');
    cy.findByRole('button', {name: 'Download on Google Play'})
      .should('be.visible');
  });

  it('Show download App suggestion banner NOT to appear on Desktop with viewport 1280x720', () => {
    cy.viewport(1280, 720);

    cy.visit('https://qa-codium-course.netlify.app/');

    cy.findByRole('suggestion').should('not.exist');
  });

  it('Show download App suggestion banner NOT to appear on Desktop with viewport 375x667', () => {
    cy.viewport(375, 667);

    cy.visit('https://qa-codium-course.netlify.app/');

    cy.findByRole('suggestion').should('not.exist');
  });
});