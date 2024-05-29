describe("Compra vuelo", () => {

  it("Invalid Card holder", () => {
    cy.visit('https://qa-codium-course.netlify.app/checkout?from=BCN&to=MAD&checkIn=07%2F05%2F2024&checkOut=29%2F05%2F2024&guests-adults=1&guests-children=0&guests-infants=0&hour=10:30%20AM%20-%2012:20%20PM&price=93');


    cy.window()
      .then((win => {
        cy.stub(win, 'prompt').returns(124);
      }));
    cy.window()
      .then((win => {
        cy.spy(win, 'alert').as('alertShow')
      }));
    cy.get('.mb-8').click();

    cy.findByPlaceholderText('CVC').click()
    cy.get('@alertShow')
      .should(
        "have.been.calledOnceWith",
        "Invalid card because: Invalid Card holder"
      )
    cy.findByPlaceholderText('CVC')
      .should('have.value', '124')


  });

  it("Invalid Number", () => {
    cy.visit('https://qa-codium-course.netlify.app/checkout?from=BCN&to=MAD&checkIn=07%2F05%2F2024&checkOut=29%2F05%2F2024&guests-adults=1&guests-children=0&guests-infants=0&hour=10:30%20AM%20-%2012:20%20PM&price=93');
    cy.get('#card-holder').click();
    cy.get('.grid').click();
    cy.get('#card-holder').click();
    cy.get('#card-holder').type('Prueba');
    //cy.get('#card-no').type('4111111111111111');
    cy.get('.rounded-md:nth-child(2)').type('{backspace}');
    cy.get('.rounded-md:nth-child(2)').type('{backspace}');
    cy.get('.rounded-md:nth-child(2)').type('{backspace}');
    cy.get('.rounded-md:nth-child(2)').type('03/30');

    cy.window()
      .then((win => {
        cy.stub(win, 'prompt').returns(124);
      }));
    cy.window()
      .then((win => {
        cy.spy(win, 'alert').as('alertShow')
      }));
    cy.get('.mb-8').click();

    cy.findByPlaceholderText('CVC').click()
    cy.get('@alertShow')
      .should(
        "have.been.calledOnceWith",
        "Invalid card because: Invalid Number"
      )
    cy.findByPlaceholderText('CVC')
      .should('have.value', '124')


  });

  it("Invalid Expiration", () => {
    cy.visit('https://qa-codium-course.netlify.app/checkout?from=BCN&to=MAD&checkIn=07%2F05%2F2024&checkOut=29%2F05%2F2024&guests-adults=1&guests-children=0&guests-infants=0&hour=10:30%20AM%20-%2012:20%20PM&price=93');
    cy.url().should('contains', 'https://qa-codium-course.netlify.app/checkout');
    cy.get('#card-holder').click();
    cy.get('.grid').click();
    cy.get('#card-holder').click();
    cy.get('#card-holder').type('Prueba');
    cy.get('#card-no').type('4111111111111111');
    //cy.get('.rounded-md:nth-child(2)').type('{backspace}');
    //cy.get('.rounded-md:nth-child(2)').type('{backspace}');
    //cy.get('.rounded-md:nth-child(2)').type('{backspace}');
    //cy.get('.rounded-md:nth-child(2)').type('03/30');

    cy.window()
      .then((win => {
        cy.stub(win, 'prompt').returns(124);
      }));
    cy.window()
      .then((win => {
        cy.spy(win, 'alert').as('alertShow')
      }));
    cy.get('.mb-8').click();

    cy.findByPlaceholderText('CVC').click()
    cy.get('@alertShow')
      .should(
        "have.been.calledOnceWith",
        "Invalid card because: Invalid Expiration"
      )
    cy.findByPlaceholderText('CVC')
      .should('have.value', '124')


  });

  it("Invalid CVC", () => {
    cy.visit('https://qa-codium-course.netlify.app/checkout?from=BCN&to=MAD&checkIn=07%2F05%2F2024&checkOut=29%2F05%2F2024&guests-adults=1&guests-children=0&guests-infants=0&hour=10:30%20AM%20-%2012:20%20PM&price=93');
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
        cy.spy(win, 'alert').as('alertShow')
      }));
    cy.get('.mb-8').click();

    //cy.findByPlaceholderText('CVC').click()
    cy.get('@alertShow')
      .should(
        "have.been.calledOnceWith",
        "Invalid card because: Invalid CVC"
      )


  });
});


