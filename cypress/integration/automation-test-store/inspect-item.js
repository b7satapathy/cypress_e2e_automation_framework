/// <reference types ="Cypress" />

describe("Inspect Automation Test Store using chain of commands", () => {
  it("Click on the firt item using item header", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[title='Skinsheen Bronzer Stick']").click();
    cy.log("The test has been completed");
  });
});
