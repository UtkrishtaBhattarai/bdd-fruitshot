class login{
    email(){
        return cy.get('input[type="email"]')
    }
    password(){
        return cy.get('input[type="password"]')
    }
    signInButton(){
        return cy.get('button').contains('LOGIN')
    }
}
export default login