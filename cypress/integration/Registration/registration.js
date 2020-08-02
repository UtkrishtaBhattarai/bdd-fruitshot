Given('I open Conduit register page', () => {
    cy.visit('http://localhost:3000/register')
  });
  
  When('I type in', (datatable) => { 
    datatable.hashes().forEach(element => {
        cy.get('input[name="fname"]').type(element.fname)
        cy.get('input[name="lname"]').type(element.lname)
        cy.get('input[name="address"]').type(element.address)
        cy.get('input[name="email"]').type(element.email)
        cy.get('input[name="phone"]').type(element.number)
        cy.get('input[type="password"]').type(element.password)
    })
  })
  
  When('I click on REGISTER button', () => {
    cy.get('button').contains('REGISTER').should('be.visible').click()
  });
  
  Then('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
  });