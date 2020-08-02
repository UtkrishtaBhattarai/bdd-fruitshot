Given('I open Conduit login page', () => {
    cy.visit('http://localhost:3000/login')
  });
  
  When('I type in', (datatable) => { 
    datatable.hashes().forEach(element => {
        cy.get('input[type="email"]').type(element.email)
        cy.get('input[type="password"]').type(element.password)
    })
  })
  
  When('I click on LOGIN button', () => {
    cy.get('button').contains('LOGIN').should('be.visible').click()
  });
  
  Then('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
  });