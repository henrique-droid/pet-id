/// <reference types="cypress" />

context('home tests', () => {
    it('certifies home page is loaded', () => {
        cy.visit('/')
    });
    it('logs in', () => {
    
        cy.get('body').contains('Entrar').click();
        cy.url().should('include', '/home');
    });
    it('signs up', () => {
        cy.visit('/');
        cy.get('body').contains('Cadastrar').click();
        cy.url().should('include', 'sign-up');
    });
    it('go to sign up and go back to login screen', () => {
        cy.visit('/');
        cy.get('body').contains('Cadastrar').click();
        cy.get('body').contains('Voltar').click();
        cy.get('body').contains('Entrar');
    });
});