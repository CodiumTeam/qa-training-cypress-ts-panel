describe('Home Page', () => {
  it('Should display home correctly', () => {
    cy.visit('https://qa-codium-course.netlify.app/');

    cy.get('#main-block').compareSnapshot({name: "flights-search-form"});
  });
});