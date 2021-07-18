describe('Home Page - Desktop', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('displays the navigation components as expected', () => {
    // The menu toggle should not appear in the header
    cy.get('.menuToggle').should('have.length', 1);
    cy.get('.menuToggle').should('have.css', 'display', 'none');

    // The sidebar should be visible
    cy.get('.side-navigation').should('have.length', 1);
    cy.get('.side-navigation').should('be.visible');
  });
});
