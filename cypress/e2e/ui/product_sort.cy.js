/// <reference types="cypress" />

describe('Product Sorting - Saucedemo', () => {
  
  beforeEach(() => {
    cy.visit('/');
    cy.fixture('users').then((users) => {
      cy.login(users.validUser.username, users.validUser.password);
    });
    cy.url().should('include', '/inventory.html');
  });

  it('should sort products from Z to A correctly', () => {
    cy.get('.product_sort_container').select('za');

    cy.get('.inventory_item_name').then(($items) => {
      const names = [...$items].map(item => item.innerText);
      const sorted = [...names].sort().reverse();
      expect(names).to.deep.equal(sorted);
    });
  });

  it('should sort products from low to high price correctly', () => {
    cy.get('.product_sort_container').select('lohi');

    cy.get('.inventory_item_price').then(($prices) => {
      const prices = [...$prices].map(price => parseFloat(price.innerText.replace('$', '')));
      const sorted = [...prices].sort((a, b) => a - b);
      expect(prices).to.deep.equal(sorted);
    });
  });

});
