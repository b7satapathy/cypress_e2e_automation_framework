/// <reference types ="Cypress" />

describe("Handling IFrame & Modals", () => {
  it("Handle webdriver university iFrame and Modal", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#iframe").invoke("removeAttr", "target").click({ force: true });
    cy.get("#frame").then(($iframe) => {
      const body = $iframe.contents().find("body");
      cy.wrap(body).as("iframe");
    });
    cy.get("@iframe").find("#button-find-out-more").click();
    cy.get("@iframe").find("#myModal").as("modal");
    cy.get("@modal").then(($text) => {
      const text = $text.text();
      expect(text).to.include("wide range of electrical goods");
    });
    cy.get("@modal").contains("Close").click();
  });
});
