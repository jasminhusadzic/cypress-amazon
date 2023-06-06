import { BasePage } from "../base-po";

export class ResultsPage extends BasePage {
  constructor() {
    super("results");
  }

  openProduct = (options: { withDescription: string }) => {
    this.productDescription
      .contains(options.withDescription)
      .should("be.visible")
      .click();
  };

  shouldProductPricesBeShown = () => {
    this.productPrices.should("be.visible").and("have.length.greaterThan", 0);
    cy.wait(2000);
  };

  shouldProductBeSortedAscending = () => {
    const prices = [];
    this.prices.each(($price: any, index) => {
      const price = parseFloat($price.text().replace("$", ""));
      prices.push(price);

      index > 0 ? expect(price).to.be.gte(prices[index - 1]) : null;
    });
  };

  get productDescription() {
    return cy.get("h2 .a-color-base");
  }

  get productPrices() {
    return cy.get("span.a-price");
  }

  get prices() {
    return cy.get('span[data-a-color="base"]>span.a-offscreen');
  }
}
