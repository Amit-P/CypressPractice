describe('post user request', () => {
it('fetch all user data and store in JSON file', () => {
    // Define an empty array to store user data
    let userData = [];
  
    // Send HTTP requests to retrieve user details for all pages
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/users?page=1',
    }).then((response) => {
      // Add user data from page 1 to the array
      userData = userData.concat(response.body.data);
  
      // Get the total number of pages from the response
      const totalPages = response.body.total_pages;
      cy.log("Total pages=", totalPages)
  
      // Send HTTP requests to retrieve user details for all remaining pages
      for (let i = 2; i <= totalPages; i++) {
        cy.request({
          method: 'GET',
          url: `https://reqres.in/api/users?page=${i}`,
        }).then((response) => {
          // Add user data from this page to the array
          userData = userData.concat(response.body.data);
  
          // If this is the last page, write the data to a JSON file
          if (i === totalPages) {
            cy.writeFile('cypress/fixtures/userdata.json', { users: userData });
          }
        });
      }
    });
  });
});