describe('Login', () => {
    const modalContent = '.swal2-html-container'
    const toast = 'div[role=status]'

    it ('usuário obrigatório', ()=> {
        cy.login(null, 'teste')
        cy.get(toast)
            .should('have.text', 'Informe o seu nome de usuário!')
    })

    it ('senha obrigatória', ()=> {
        cy.login('qa', null)
        cy.get(toast)
            .should('have.text', 'Informe a sua senha secreta!')
    })

    it('usuário não existe', () => {
        cy.login('teste', 'teste')
        cy.get(toast)
            .should('have.text', 'Oops! Credenciais inválidas :(')
    })

    it('senha incorreta', () => {
        cy.login('qa', 'teste')
        cy.get(toast)
            .should('have.text', 'Oops! Credenciais inválidas :(')
    })

    it('com sucesso', () => {
        cy.login('qa', 'xperience')
        cy.get(modalContent)
            .should('have.text', 'Suas credenciais são válidas :)')
    })

    it('usuário com espaços em branco', () => {
        cy.login('   ', 'xperience')
        cy.get(toast)
            .should('have.text', 'Informe o seu nome de usuário!')
    })

    it('senha com espaços em branco', () => {
        cy.login('qa', '   ')
        cy.get(toast)
            .should('have.text', 'Informe a sua senha secreta!')
    })

    it('usuário com caracteres especiais', () => {
        cy.login('qa!@#$', 'xperience')
        cy.get(toast)
            .should('have.text', 'Oops! Credenciais inválidas :(')
    })

    it('senha com caracteres especiais', () => {
        cy.login('qa', 'xperience!@#')
        cy.get(toast)
            .should('have.text', 'Oops! Credenciais inválidas :(')
    })

    it('usuário e senha vazios', () => {
        cy.login('', '')
        cy.get(toast)
            .should('have.text', 'Informe o seu nome de usuário!')
    })

    it('usuário e senha nulos', () => {
        cy.login(null, null)
        cy.get(toast)
            .should('have.text', 'Informe o seu nome de usuário!')
    })
})
