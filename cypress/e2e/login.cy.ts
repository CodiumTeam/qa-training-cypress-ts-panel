describe("Login", () => {
    it ("tests Login", () => {
        cy.visit('https://qa-codium-course.netlify.app/');
        cy.get('.py-16').click();
        cy.get('.py-1').click();
        cy.get('.mb-4 .pl-2').click();
        cy.get('.mb-4 .pl-2').type('info@codium.team');
        cy.get('.flex:nth-child(4) .pl-2').click();
        cy.get('.flex:nth-child(4) .pl-2').type('codiumTest');
        cy.get('.block').click();
        cy.get('.bg-white:nth-child(1)').submit();
        cy.url().should('contains', 'https://qa-codium-course.netlify.app/');
        // El siguiente paso es el Logout
        // Validacion aparezca el texto logout
        //cy.pause();
        //cy.get('.hidden > .inline-block').should('have.text','Log out'); Se puede hacer de las 2 formas
        cy.findByText('Log out').should('exist');  
        cy.get('.py-16').click();
        cy.get('.py-1').click();
        cy.get('.py-1').should('have.text','Log in');
          
    });
  });