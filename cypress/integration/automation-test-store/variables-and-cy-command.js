/// <reference types ="Cypress" />

describe("verifying variables, cypress commands and jquery commands", () => {
  it("Navigating to specific product pages", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("ul[class='nav-pills categorymenu']").contains("Makeup").click();
    cy.get("ul[class='nav-pills categorymenu']").contains("Skincare").click();
  });

  it("Navigating to specific product pages with variables example", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("ul[class='nav-pills categorymenu']").contains("Makeup").click();
    cy.get("h1 .maintext").then(($headerText) => {
      const headerText = $headerText.text();
      cy.log("found header text:" + headerText);
      expect(headerText).is.eq("Makeup");
    });
  });

  it("Validate properties of the contact us Page", () => {
    cy.visit("https://automationteststore.com/index.php?rt=content/contact");

    //uses cypress commands and chaining
    cy.contains("#ContactUsFrm", "Contact Us Form")
      .find("#field_11")
      .should("contain", "First name");

    //JQuery Approach
    cy.contains("#ContactUsFrm", "Contact Us Form").then((text) => {
      const firstNameText = text.find("#field_11").text();
      expect(firstNameText).to.contain("First name");

      //Embedded commands (Closure)
      cy.get("#field_11").then((newText) => {
        cy.log(newText.text());
        cy.log(newText);
      });
    });
  });
});
