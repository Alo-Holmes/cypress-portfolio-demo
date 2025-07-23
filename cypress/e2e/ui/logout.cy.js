/// <reference types="cypress" />

describe('Logout - Saucedemo', () => {
  
  beforeEach(() => {
    cy.visit('/');
    cy.fixture('users').then((users) => {
      cy.login(users.validUser.username, users.validUser.password);
    });
    cy.url().should('include', '/inventory.html');
  });

  it('should log out successfully and redirect to login page', () => {
    // Open menu
    cy.get('#react-burger-menu-btn').click();
    cy.get('#logout_sidebar_link').should('be.visible').click();

    // Assert we're back at the login page
    cy.url().should('eq', 'https://www.saucedemo.com/');
    cy.get('[data-test="login-button"]').should('be.visible');
  });

});
