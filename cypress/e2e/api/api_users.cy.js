/// <reference types="cypress" />

describe('JSONPlaceholder Users API', () => {
  const baseUrl = 'https://jsonplaceholder.typicode.com';

  it('GET /users - should return a list of users', () => {
    cy.request(`${baseUrl}/users`)
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array').and.to.have.length.greaterThan(0);
        expect(response.body[0]).to.have.property('id');
        expect(response.body[0]).to.have.property('name');
      });
  });

  it('POST /posts - should create a new post', () => {
    const newPost = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    };

    cy.request('POST', `${baseUrl}/posts`, newPost)
      .then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.include(newPost);
        expect(response.body).to.have.property('id');
      });
  });
});
