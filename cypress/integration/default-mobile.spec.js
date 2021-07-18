describe('Home Page - Desktop', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.viewport(320, 480);
  });

  it('displays the navigation components as expected', () => {
    // The menu toggle should be displayed in the header
    cy.get('.menuToggle').should('have.length', 1);
    cy.get('.menuToggle').should('not.have.css', 'display', 'none');

    // The sidebar should be closed by default
    cy.get('.side-navigation').should('have.length', 1);
    cy.get('.side-navigation').should('not.be.visible');

    // When we click the menu toggle...
    cy.get('.menuToggle').click();
    // ...the sidebar should open
    cy.get('.side-navigation').should('be.visible');

    // When we click the menu toggle again...
    cy.get('.menuToggle').click();
    // ...the sidebar should close
    cy.get('.side-navigation').should('not.be.visible');
  });
});
