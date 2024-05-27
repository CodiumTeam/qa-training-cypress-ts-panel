describe("Busqueda Vuelo", () => {
beforeEach(()=> {
    cy.visit('https://qa-codium-course.netlify.app/');
})
    it("tests Busqueda Vuelo", () => {
        cy.get('#where-are-you-going-portal').click();
        cy.get('#where-are-you-going #madrid').click();
        cy.get('#to-where-are-you-going #barcelona').click();
        cy.get('.relative:nth-child(4) > .relative > .relative').type('2024-05-29');
        cy.get('.relative:nth-child(5) > .relative > .relative').type('2024-05-30');
        cy.get('.mb-2').click();
        cy.get('.mt-5').click();
        cy.url().should('contains', 'https://qa-codium-course.netlify.app/search');
        cy.get('.relative > .font-bold').should('contain','Madrid');
        cy.get('.relative > .font-bold').should('contain','Barcelona');        
    });
  });