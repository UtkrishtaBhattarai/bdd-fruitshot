class login{
    fname(){
        return cy.get('input[name="fname"]')
    }
    lname(){
        return cy.get('input[type="text"]')
    }
    address(){
        return cy.get('input[type="text"]')
    }
    number(){
        return cy.get('input[type="text"]')
    }
    email(){
        return cy.get('input[type="email"]')
    }
    password(){
        return cy.get('input[type="password"]')
    }
    signInButton(){
        return cy.get('button').contains('REGISTER')
    }
}
export default login