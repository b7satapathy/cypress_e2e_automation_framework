/// <reference types = "cypress"/>

describe("verify radio buttons of webdriveruniversity", () => {
  it("check specific radio buttons", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#radio-buttons").find("input[type='radio']").as("radios");
    cy.get("@radios").first().check();
    cy.get("@radios").eq(1).check();
  });

  it("validate the state of specific radio buttons", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#radio-buttons-selected-disabled")
      .find("input[value='lettuce']")
      .as("fistRadioButton");
    cy.get("#radio-buttons-selected-disabled")
      .find("input[value='cabbage']")
      .as("secondRadioButton");
    cy.get("#radio-buttons-selected-disabled")
      .find("input[value='pumpkin']")
      .as("thirdRadioButton");
    cy.get("@fistRadioButton").should("not.be.checked");
    cy.get("@secondRadioButton").should("be.disabled");
    cy.get("@thirdRadioButton").should("be.checked");
  });
});
