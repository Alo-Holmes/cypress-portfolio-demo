/// <reference types="cypress" />

describe('Update and Delete Flow - JSONPlaceholder', () => {
    const baseUrl = 'https://jsonplaceholder.typicode.com';
  
    it('should update and delete an existing post successfully', () => {
      const updatedPost = {
        title: 'Updated Title for Portfolio Demo',
        body: 'This body has been updated for demonstration purposes.',
        userId: 1
      };
  
      // 1. UPDATE (PUT existing post)
      cy.request('PUT', `${baseUrl}/posts/1`, updatedPost).then((updateResponse) => {
        expect(updateResponse.status).to.eq(200);
        expect(updateResponse.body.title).to.eq(updatedPost.title);
  
        // 2. DELETE (DELETE same post)
        cy.request('DELETE', `${baseUrl}/posts/1`).then((deleteResponse) => {
          expect(deleteResponse.status).to.eq(200);
        });
      });
    });
  });
  