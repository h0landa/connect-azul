///<reference types="Cypress"/>

describe ('Teste de login', () => {
    it ('Deve realizar o login com sucesso', () => {
        cy.visit("https://www.saucedemo.com")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('#login-button').click()
        cy.get('[data-test="inventory-container"]').should('contain', 'Products')
    })
})