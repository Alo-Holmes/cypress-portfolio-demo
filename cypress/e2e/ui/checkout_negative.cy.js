/// <reference types="cypress" />

describe('Checkout Negative Flow - Saucedemo', () => {
  
  beforeEach(() => {
    cy.visit('/');
    cy.fixture('users').then((users) => {
      cy.login(users.validUser.username, users.validUser.password);
    });

    // Add an item to cart and go to checkout
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="checkout"]').click();
    cy.url().should('include', '/checkout-step-one.html');
  });

  it('should show an error when required fields are missing', () => {
    // Try to continue without filling anything
    cy.get('[data-test="continue"]').click();

    cy.get('[data-test="error"]').should('contain', 'Error: First Name is required');
  });

  it('should show an error when postal code is missing', () => {
    cy.get('[data-test="firstName"]').type('QA');
    cy.get('[data-test="lastName"]').type('Engineer');
    cy.get('[data-test="continue"]').click();

    cy.get('[data-test="error"]').should('contain', 'Error: Postal Code is required');
  });

});
