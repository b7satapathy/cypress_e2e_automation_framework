/// <reference types ="Cypress" />

describe("Handle js alerts", () => {
  it("Confirm js alert contains the correct text", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get(".thumbnail #button1").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("I am an alert box!");
    });
  });

  it("validate js confirm alert box when clicking ok", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get(".thumbnail #button4").click();
    cy.on("window:alert", (str) => {
      return true;
    });
    cy.get("#confirm-alert-text").contains("You pressed OK!");
  });

  it("validate js confirm alert box when clicking cancel", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get(".thumbnail #button4").click();
    cy.on("window:confirm", (str) => {
      return false;
    });
    cy.get("#confirm-alert-text").contains("You pressed Cancel!");
  });

  it("validate js confirm alert box using a stub", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });
    const stub = cy.stub();
    cy.on("window:confirm", stub);
    cy.get(".thumbnail #button4")
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith("Press a button!");
      })
      .then(() => {
        return true;
      })
      .then(() => {
        cy.get("#confirm-alert-text").contains("You pressed OK!");
      });
  });
});
