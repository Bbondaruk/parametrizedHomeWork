
beforeEach(() => {
  cy.visit('stg-app.clevergig.nl');
})

describe('Parametrized homework', () => {

  const email = ['email', 'notemail', 'em@il.com'];
  const password = ['pass', 'passpassppaass', '1232352345354635674585687'];
  email.forEach(email => {
    it(` "${email}"`, () => {

      cy.get('input[name="email"]').type(email)

    })

  })
  password.forEach(password => {
    it(` "${password}"`, () => {

      cy.get('input[name="password"]').type(password)

    })
  })

})  