describe('Produtos', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('must contains the title of pwa', () => {
    cy.contains('ecommerce')
  })
})
