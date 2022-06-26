/// <reference types = "cypress"/>

describe("verify Autocomplete dropdown lists of webdriveruniversity", () => {
  it("Select specific product of autocomplete list", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#autocomplete-textfield")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#myInput").type("A");
    //#myInputautocomplete-list > *
    cy.get("#myInputautocomplete-list > *").each(($el, index, $list) => {
      const prod = $el.text();
    });
  });
});
