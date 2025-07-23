/// <reference types="cypress" />

describe('Chained API Requests - JSONPlaceholder', () => {
  const baseUrl = 'https://jsonplaceholder.typicode.com';

  it('should fetch user and create a post for that user', () => {
    cy.request(`${baseUrl}/users/1`).then((getUserResponse) => {
      expect(getUserResponse.status).to.eq(200);
      const userId = getUserResponse.body.id;

      const newPost = {
        title: 'Post linked to user 1',
        body: 'This post was created for user 1',
        userId: userId,
      };

      cy.request('POST', `${baseUrl}/posts`, newPost).then((postResponse) => {
        expect(postResponse.status).to.eq(201);
        expect(postResponse.body).to.include(newPost);
      });
    });
  });
});
