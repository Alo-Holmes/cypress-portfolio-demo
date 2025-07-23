/// <reference types="cypress" />

describe('Login - Saucedemo', () => {
  
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-test="username"]').should('be.visible');
  });

  it('should log in successfully with valid credentials', () => {
    cy.fixture('users').then((users) => {
      cy.login(users.validUser.username, users.validUser.password);
    });

    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('have.text', 'Products');
  });

  it('should show error for invalid password', () => {
    cy.fixture('users').then((users) => {
      cy.login(users.invalidUser.username, users.invalidUser.password);
    });

    cy.get('[data-test="error"]').should(
      'contain',
      'Username and password do not match any user in this service'
    );
  });

});
/// <reference types="cypress" />

describe('Login - Saucedemo', () => {
  
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-test="username"]').should('be.visible');
  });

  it('should log in successfully with valid credentials', () => {
    cy.fixture('users').then((users) => {
      cy.login(users.validUser.username, users.validUser.password);
    });

    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('have.text', 'Products');
  });

  it('should show error for invalid password', () => {
    cy.fixture('users').then((users) => {
      cy.login(users.invalidUser.username, users.invalidUser.password);
    });

    cy.get('[data-test="error"]').should(
      'contain',
      'Username and password do not match any user in this service'
    );
  });

});
