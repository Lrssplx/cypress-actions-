
Cypress.Commands.add('login', (user, pass) => {
    cy.visit('/')

    cy.get('[name=user]').as('username')
    cy.get('[name=pass]').as('password')

    user 
        ? cy.get('@username').clear().type(user)
        : cy.log('username is null')

    pass
        ? cy.get('[name=pass]').clear().type(pass)
        : cy.log('password is null')

    cy.contains('button', 'Entrar').click()
})