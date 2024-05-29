describe("Compra vuelo", () => {
    it ("Compra vuelo", () => { 
        cy.visit('https://qa-codium-course.netlify.app/ticket?from=BCN&to=MAD&checkIn=07%2F05%2F2024&checkOut=29%2F05%2F2024&guests-adults=1&guests-children=0&guests-infants=0&hour=10:30%20AM%20-%2012:20%20PM&price=93');
        
        cy.window()
          .then((win => {
            cy.stub(win, 'print').as('printer').returns(undefined)
          }))
          
        cy.findByRole('button', {name: 'Imprimir'}).click()

        cy.get("@printer").should("have.been.calledOnce")
               
    });
  });