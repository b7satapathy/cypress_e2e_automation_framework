/// <reference types ="Cypress" />

describe("Test contact us form via automation test store", () => {
  it("Should be able to submit a successful submission via contact us form", () => {
    cy.visit("https://automationteststore.com/");
    //cy.contains("a", "Contact Us").click();
    //cy.xpath("//a[contains(@href,'contact')]").click();
    cy.get("a[href$='contact']")
      .click()
      .then(function (elementText) {
        cy.log(`${elementText.text()} : element is clicked`);
      });
    cy.get("#ContactUsFrm_first_name").type("lee");
    cy.get("#ContactUsFrm_email").type("leeK@mail.pr");
    cy.get("#ContactUsFrm_enquiry").type("Adding a comment");
    cy.get('button[title="Submit"]').click();
    //cy.get('a[title="Continue"]').click();
    //successfully sent to
    cy.contains("p", "successfully sent to").should(
      "have.text",
      "Your enquiry has been successfully sent to the store owner!"
    );
  });
});
