import { BasePage } from "../base-po";

export class ProductPage extends BasePage {
  constructor() {
    super("product");
  }

  addToCart = () => {
    this.addToCartButton
      .first()
      .should("be.visible")
      .and("not.be.disabled")
      .click();
  };

  get addToCartButton() {
    return cy.get("#renewedAccordionRowContent #add-to-cart-button");
  }
}
