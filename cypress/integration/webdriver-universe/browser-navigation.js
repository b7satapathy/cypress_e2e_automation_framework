/// <reference types ="Cypress" />

describe("validate webdriver univerisity homapage links", () => {
  it("confirm links redirect to the correct page", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
    cy.url().should("include", "contactus");
    cy.go("back");
    cy.reload();
    cy.url().should("include", "http://www.webdriveruniversity.com/");
    cy.go("forward");
    cy.url().should("include", "contactus");
    cy.go("back");
    cy.get("#login-portal")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.url().should("include", "Login-Portal");
    cy.go("back");
    cy.url().should("include", "http://www.webdriveruniversity.com/");
    cy.get("#to-do-list").invoke("removeAttr", "target").click({ force: true });
    cy.url().should("include", "To-Do-List");
    cy.go("back");
    cy.url().should("include", "http://www.webdriveruniversity.com/");
  });
});
