describe('Checkout', () => {
  beforeEach(() => {
    cy.visit('https://qa-codium-course.netlify.app/');

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
  });

  it('Should be able to buy a flight from Madrid to Barcelona', () => {
    cy.findByLabelText('Card Holder').type('codium team');
    cy.findByLabelText('Card Details').type('4111111111111111');
    cy.findByPlaceholderText('MM/YY').type('03/25');
    cy.window()
      .then((win => {
        cy.stub(win, 'prompt').returns('124');
      }));
    cy.findByPlaceholderText('CVC').click();
    cy.findByRole('button', {name: 'Place Order'}).click();

    cy.url().should('contains', 'https://qa-codium-course.netlify.app/ticket');
  });

  it('Should show flight summary in the checkout page', () => {
    cy.findByText(/flights from madrid to barcelona/i).should('be.visible');
    cy.findByText('93').should('be.visible');
  });

  it('Should show "Invalid card holder" when the holder ame is not filled', () => {
    cy.findByLabelText('Card Details').type('4111111111111111');
    cy.findByPlaceholderText('MM/YY').type('03/25');
    cy.window()
      .then((win => {
        cy.stub(win, 'prompt').returns('124');
      }));
    cy.findByPlaceholderText('CVC').click();
    cy.window()
      .then((win => {
        cy.spy(win, 'alert').as('alertShown');
      }));
    cy.findByRole('button', {name: 'Place Order'})
      .click();

    cy.get("@alertShown")
      .should(
        "have.been.calledOnceWith",
        "Invalid card because: Invalid Card holder"
      );
  });
});