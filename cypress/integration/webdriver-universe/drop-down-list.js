/// <reference types = "cypress"/>

describe("interact with dropdown lists of webdriveruniversity", () => {
  it("select specific values of dropsown lists", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#dropdowm-menu-1").select("python");
    cy.get("#dropdowm-menu-2").select("TestNG").should("have.value", "testng");
    cy.get("#dropdowm-menu-3").select("javascript").contains("JavaScript");
  });
});
