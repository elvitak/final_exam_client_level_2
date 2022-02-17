/* eslint-disable no-undef */
describe("Visitor can navigate the application", () => {
  before(() => {
    cy.visit("/");
  });

  it("is expected to see header course list", () => {
    cy.get("[data-cy=header]").should("contain", "Course list");
  });
});
