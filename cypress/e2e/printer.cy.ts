describe('Ticket', () => {
  beforeEach(() => {
    cy.visit('https://qa-codium-course.netlify.app/');
  });

  it('Should be able to buy and print the flight ticket from Madrid to Barcelona', () => {
    cy.findByLabelText('From').click();
    cy.selectFrom('#madrid');
    cy.selectTo('#barcelona');
    cy.findByPlaceholderText('Check in').type('2023-01-11');
    cy.findByPlaceholderText('Check out').type('2023-01-18');
    cy.findByRole('button', {name: 'Search'}).click();
    cy.findAllByRole('button',{name: 'Select'}).first().click();
    cy.findByPlaceholderText('Email Address').type(`info@codium.team`);
    cy.findByPlaceholderText('Password').type('codiumTest');
    cy.findByRole('button', {name: 'Login'}).click();
    cy.findByLabelText('Card Holder').type('codium team');
    cy.findByLabelText('Card Details').type('4111111111111111');
    cy.findByPlaceholderText('MM/YY').type('03/25');
    cy.window()
      .then((win => {
        cy.stub(win, 'prompt').returns('124');
      }));
    cy.findByPlaceholderText('CVC').click();
    cy.findByRole('button', {name: 'Place Order'}).click();
    cy.findByRole('button', {name: 'Imprimir'}).should('be.visible');
    cy.window()
      .then((win => {
        cy.stub(win, 'print').as('printer');
      }));
    cy.findByRole('button', {name: 'Imprimir'}).click();
    cy.get("@printer")
      .should(
        "have.been.calledOnce"
      );
  });
});