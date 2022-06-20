/// <reference types ="Cypress" />

describe("iterate ove elements", () => {
  it("log information of all hair care products", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("ul[class='nav-pills categorymenu']").contains("Hair Care").click();

    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      cy.log("index: " + index + " : " + $el.text());
    });
  });

  it.only("add specific product to cart", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("ul[class='nav-pills categorymenu']").contains("Hair Care").click();
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      if ($el.text().includes("Curls to straight Shampoo")) {
        cy.wrap($el).click();
      }
    });
  });
});
