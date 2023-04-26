it('Intercept by Url', () => {
    cy.visit('https://reqres.in/');
    cy.intercept('https://reqres.in/api/users/').as('posts')
    cy.get("[data-id=users]").click()
    cy.wait('@posts').its('response.body.data').should('have.length', 6)
}) 