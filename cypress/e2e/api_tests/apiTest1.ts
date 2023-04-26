describe('api testing', () => {
  it('fetch user id and store in json file', () => {
  // Send HTTP request to retrieve user details
  cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/users?page=2',
    }).then((response) => {
      // Extract user ID from response body
      const userID = response.body.data[0].id;
      //Verify that response code is 200
      expect(response.status).to.equal(200)
      // Store user ID in JSON file
      cy.writeFile('cypress/fixtures/userid.json', { userID: userID });
    });
  })
  it('create a new user', () => {
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/users',
      body:{
        "name": "morpheus",
        "job": "leader"
      }
    }).then((response) => {
      expect(response.status).to.equal(201)
    });
  })
})