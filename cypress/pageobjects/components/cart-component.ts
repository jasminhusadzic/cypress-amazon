export class CartComponent {

  shouldCartHaveProduct = (options: { withDescription: string }) => {
    // Pseudo code for cart validation
    // this.cartItems.should("contain.text", options.withDescription);
  };

  get cartItems() {
    return cy.get("");
  }
}
