/* eslint-disable no-undef */
describe("Visitor can navigate the application", () => {
  before(() => {
    cy.visit("/");
  });

  it("is expected to see header course list", () => {
    cy.get("[data-cy=header]").should("contain", "Course list");
  });

  it("is expected to display 7 categories", () => {
    cy.get("[data-cy=categories]").children().should("have.length", 7);
  });
});
