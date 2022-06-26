/// <reference types ="Cypress" />

describe("Cypress web security", () => {
  it("validate visiting two different domains", () => {
    cy.visit("https://automationteststore.com/");
    //cy.visit("http://www.webdriveruniversity.com/");
    // same origin policy error
  });

  it("validate visiting two different domains via user actions", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#automation-test-store").invoke("removeAttr", "target").click();
  });
});
