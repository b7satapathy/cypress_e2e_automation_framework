/// <reference types = "cypress"/>

describe("verify checkboxes of webdriveruniversity", () => {
  it("check and validate checkboxes", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#checkboxes").as("checkboxes");
    cy.get("@checkboxes").find('input[value="option-1"]').as("firstCheckbox");
    cy.get("@checkboxes").find('input[value="option-2"]').as("secondCheckbox");
    cy.get("@checkboxes").find('input[value="option-3"]').as("thirdCheckbox");
    cy.get("@firstCheckbox").check().should("be.checked");
    cy.get("@secondCheckbox").check().should("be.checked");
    cy.get("@thirdCheckbox").uncheck().should("not.be.checked");
  });

  it("check mutliple checkboxes", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("input[type='checkbox']")
      .check(["option-1", "option-2", "option-3", "option-4"])
      .should("be.checked");
  });
});
