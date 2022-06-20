/// <reference types ="Cypress" />

describe("Test contact us form via webdriveruniversity", () => {
  it("Should be able to submit a successful submission via contact us form", () => {
    //code
    cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriver");
    cy.url().should("include", "contactus");
    cy.get('[name="first_name"]').type("joe");
    cy.get('[name="last_name"]').type("kopta");
    cy.get('[name="email"]').type("joe.kp@mail.lop");
    cy.get("textarea.feedback-input").type("adding comment");
    cy.get('[type="submit"]').click();
    cy.get("h1").should("have.text", "Thank You for your Message!");
  });

  it("Should not be able to submit a successful submission as all fileds are required", () => {
    cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.get('[name="first_name"]').type("joe");
    cy.get('[name="last_name"]').type("kopta");
    cy.get("textarea.feedback-input").type("adding comment");
    cy.get('[type="submit"]').click();
    cy.get("body").contains("Error: all fields are required");
  });
});
