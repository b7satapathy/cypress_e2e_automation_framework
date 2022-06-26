/// <reference types ="Cypress" />

describe("Alias and invoke", () => {
  it("validate a specific hair care product", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("ul[class='nav-pills categorymenu']").contains("Hair Care").click();

    cy.get(".fixed_wrapper .prdocutname")
      .eq(0)
      .invoke("text")
      .as("productName");
    cy.get("@productName").its("length").should("be.gt", 5);
    cy.get("@productName").should("include", "Seaweed Conditioner");
  });

  it("validate all products has add to cart", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".thumbnail").as("productThumbnail");
    cy.get("@productThumbnail").should("have.length", 16);
    cy.get("@productThumbnail")
      .find(".productcart")
      .invoke("attr", "title")
      .should("include", "Add to Cart");
  });

  it.only("calculate total of normal and sale product", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".thumbnail").as("productThumbnail");
    /*  cy.get("@productThumbnail")
      .find(".oneprice")
      .each(($el, index, $list) => {
        cy.log($el.text());
      }); */
    cy.get(".thumbnail").find(".oneprice").invoke("text").as("itemPrice");
    cy.get(".thumbnail").find(".pricenew").invoke("text").as("updatedPrice");

    let TotalSum = 0;

    cy.get("@itemPrice").then(($price) => {
      let trimmedPrice = $price.split("$");
      let countTotalSum = 0;

      for (let i = 0; i < trimmedPrice.length; i++) {
        countTotalSum += Number(trimmedPrice[i]);
      }
      TotalSum += countTotalSum;

      cy.log(countTotalSum);
      cy.log(TotalSum);
    });

    cy.get("@updatedPrice")
      .then(($price) => {
        let trimmedUpdatedPrice = $price.split("$");
        let countTotalUpdatedSum = 0;

        for (let i = 0; i < trimmedUpdatedPrice.length; i++) {
          countTotalUpdatedSum += Number(trimmedUpdatedPrice[i]);
        }
        TotalSum += countTotalUpdatedSum;

        cy.log(countTotalUpdatedSum);
        cy.log(TotalSum);
      })
      .then(() => {
        cy.log("total amount: " + TotalSum);
        expect(TotalSum).to.equal(648.5);
      });
  });
});
