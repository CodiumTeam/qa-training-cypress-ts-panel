describe("Compra vuelo", () => {
    it ("Compra vuelo", () => {         //El skip  hace que no se ejecute
        cy.visit('https://qa-codium-course.netlify.app/');
        cy.get('.py-16').click();
        cy.get('#where-are-you-going-portal').click();
        cy.get('#where-are-you-going #madrid').click();
        cy.get('#to-where-are-you-going #barcelona').click();
        cy.get('.relative:nth-child(4) > .relative > .relative').type('2024-05-29');
        cy.get('.relative:nth-child(5) > .relative > .relative').type('2024-05-29');
        cy.get('.mb-2').click();
        cy.get('.mt-5').click();
        cy.url().should('contains', 'https://qa-codium-course.netlify.app/search');
        cy.get('.flight-card:nth-child(1) .flight-card__cta').click();
        cy.url().should('contains', 'https://qa-codium-course.netlify.app/login');
        cy.get('.mb-4 .pl-2').click();
        cy.get('.mb-4 .pl-2').type('info@codium.team');
        cy.get('.flex:nth-child(4) .pl-2').click();
        cy.get('.flex:nth-child(4) .pl-2').type('codiumTest');
        cy.get('.block').click();
        cy.get('.bg-white:nth-child(1)').submit();
        cy.url().should('contains', 'https://qa-codium-course.netlify.app/checkout');
        cy.get('#card-holder').click();
        cy.visit('https://qa-codium-course.netlify.app/checkout?from=MAD&to=BCN&checkIn=29%2F05%2F2024&checkOut=29%2F05%2F2024&guests-adults=1&guests-children=0&guests-infants=0&hour=10:30%20AM%20-%2012:20%20PM&price=93');
        cy.get('.grid').click();
        cy.get('#card-holder').click();
        cy.get('#card-holder').type('Prueba');
        cy.get('#card-no').type('4111111111111111');
        cy.get('.rounded-md:nth-child(2)').type('{backspace}');
        cy.get('.rounded-md:nth-child(2)').type('{backspace}');
        cy.get('.rounded-md:nth-child(2)').type('{backspace}');
        cy.get('.rounded-md:nth-child(2)').type('03/30');

        cy.window()
     .then((win => {
       cy.stub(win, 'prompt').returns(124);
       cy.spy(win, 'alert').as('alertShown')
     }));
     cy.findByPlaceholderText('CVC').click()

     cy.findByPlaceholderText('CVC')
       .should('have.value', '124')  
        cy.get('.mb-8').click();
        cy.url().should('contains', 'https://qa-codium-course.netlify.app/ticket');         
    });
  });