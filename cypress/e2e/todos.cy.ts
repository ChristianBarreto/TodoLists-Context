describe('template spec', () => {
  it('Load the page', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-cy="app-title"]').should('have.text', 'My to-do listsfor Arke')
  })
})