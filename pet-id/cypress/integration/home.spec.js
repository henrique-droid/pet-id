/// <reference types="cypress" />

context('home tests', () => {
    it('certifies home page is loaded', () => {
        cy.visit('/')
    });
});