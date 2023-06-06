import { CartComponent } from "./components/cart-component";
import { NavigationComponent } from "./components/navigation-component";

export class BasePage {
  private url: string;
  constructor(url: string) {
    this.url = url;
  }

  open = (path?: string) => {
    cy.visit(path || this.url);
  };

  getCartComponnt = () => {
    return new CartComponent();
  };

  getNavigationComponent = () => {
    return new NavigationComponent();
  };
}
