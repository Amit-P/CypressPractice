describe('post user request', () => {

    // let accessToken = '9efc0faf378bb1fc83124c937d8979122ec730626c99927162be59424d4eaf56'
    
    it('create user test', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            body: {
                "id": 19,
                "email": "suraj.funke@reqres.in",
                "first_name": "Suraj",
                "last_name": "Kumar",
            }
        }).then((res) => {
        expect(res.status).to.eq(201)
        expect(res.body).to.deep.include({
                "id": 19,
                "email": "suraj.funke@reqres.in",
                "first_name": "Suraj",
                "last_name": "Kumar"
            })
        })
    })
})