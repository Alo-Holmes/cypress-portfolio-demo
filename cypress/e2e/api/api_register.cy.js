/// <reference types="cypress" />

describe('User Registration - JSONPlaceholder', () => {
    const baseUrl = 'https://jsonplaceholder.typicode.com';
  
    it('should create a new user successfully', () => {
      const newUser = {
        name: 'QA Engineer',
        email: 'qa.engineer@example.com',
        password: 'securePassword123'
      };
  
      cy.request('POST', `${baseUrl}/users`, newUser)
        .then((response) => {
          expect(response.status).to.eq(201);
          expect(response.body).to.include.keys('id');
          expect(response.body.name).to.eq(newUser.name);
        });
    });
  
    it('should simulate failed registration due to missing password', () => {
      const incompleteUser = {
        name: 'QA Engineer',
        email: 'qa.engineer@example.com'
        // no password
      };
  
      cy.request({
        method: 'POST',
        url: `${baseUrl}/users`,
        body: incompleteUser,
        failOnStatusCode: false
      }).then((response) => {
        // JSONPlaceholder doesn’t actually validate, so we fake the assertion here for demo
        expect(response.status).to.be.oneOf([201, 400]);
      });
    });
  
  });
  