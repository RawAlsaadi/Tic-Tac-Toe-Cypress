class BasePage {
  open() {
    cy.visit(Cypress.env('indexUrl'));
  }
}

export { BasePage };
