/// <reference types="cypress" />

print
describe('Flights', () => {
  

  //TestIOS
  it('Prueba de IOS header', () => {
    cy.viewport('iphone-7');
    cy.visit('https://qa-codium-course.netlify.app/', {
      headers: {
        'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1',
      }
      
    }
  )
  cy.findByText(/Move over the world with Flights on iOS/i).should('be.visible')
  cy.findByRole('button', {name: 'Download on App Store'}).should('be.visible')
  });

    //TestAND
    it('Prueba de AND header', () => {
      cy.viewport('samsung-s10');
      cy.visit('https://qa-codium-course.netlify.app/', {
        headers: {
          'user-agent': 'Mozilla/5.0 (Linux; Android 9; SM-G960F Build/PPR1.180610.011) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Mobile Safari/537.36',
        } 
      }
    )
    cy.findByText(/Move over the world with Flights on Android/i).should('be.visible')
    cy.findByRole('button', {name: 'Download on Google Play'}).should('be.visible')
    });

    //TestPCResoluciones
    //1280x720
    it('Prueba de PC Resoluciones 1280x720', () => {
      cy.viewport(1280, 720);
      cy.visit('https://qa-codium-course.netlify.app/')
      cy.findByRole('button', {name: 'Download on App Store'}).should('not.exist')
      cy.findByText(/Move over the world with Flights on iOS/i).should('not.exist')
      cy.findByRole('button', {name: 'Download on Google Play'}).should('not.exist')
      cy.findByText(/Move over the world with Flights on Android/i).should('not.exist')
    });
    //375x667  
    it('Prueba de PC Resoluciones 375x667', () => {
      cy.viewport(375, 667);
      cy.visit('https://qa-codium-course.netlify.app/')
      cy.findByRole('button', {name: 'Download on App Store'}).should('not.exist')
      cy.findByText(/Move over the world with Flights on iOS/i).should('not.exist')
      cy.findByRole('button', {name: 'Download on Google Play'}).should('not.exist')
      cy.findByText(/Move over the world with Flights on Android/i).should('not.exist')
    });

});
