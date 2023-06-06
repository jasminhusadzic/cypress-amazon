import { homePage, productPage, resultsPage } from "../pageobjects";
import { Filters } from "../utils/enums/filters";
import { MenuItems } from "../utils/enums/menu-items";
import { SortOptions } from "../utils/enums/sort-options";

describe("Add to cart", () => {
  const notebooks: any = {};
  before(() => {
    cy.fixture("notebooks.json").then(($notebooks) => {
      notebooks.notebook = $notebooks;
    });
  });

  beforeEach(() => {
    homePage.open();
  });

  it("ID-1 Unregistrated user is able to add product to cart", () => {
    // Given
    homePage.getNavigationComponent().expandSidebarMenu();
    homePage.getNavigationComponent().navigateTo({ item: MenuItems.computers });

    homePage
      .getNavigationComponent()
      .navigateTo({ item: MenuItems.computersAndTablets });

    // When I filter products
    homePage
      .getNavigationComponent()
      .filter.set({ filter: Filters.departments, value: Filters.laptops });

    homePage
      .getNavigationComponent()
      .filter.set({ filter: Filters.featuredBrands, value: Filters.apple });

    homePage.getNavigationComponent().filter.set({
      filter: Filters.price,
      value: Filters.sevenToEightHundred,
    });

    // And I add product to cart
    resultsPage.openProduct({
      withDescription: notebooks.notebook.apple.description,
    });
    productPage.addToCart();

    // Then I should see product is added
    productPage.getCartComponnt().shouldCartHaveProduct({
      withDescription: notebooks.notebook.apple.description,
    });
  });

  it("ID-2 Unregistrated user is able to sort products by price", () => {
    // Given
    homePage.getNavigationComponent().expandSidebarMenu();
    homePage.getNavigationComponent().navigateTo({ item: MenuItems.computers });

    homePage
      .getNavigationComponent()
      .navigateTo({ item: MenuItems.computersAndTablets });

    // When I filter products
    homePage
      .getNavigationComponent()
      .filter.set({ filter: Filters.departments, value: Filters.laptops });

    homePage
      .getNavigationComponent()
      .filter.set({ filter: Filters.featuredBrands, value: Filters.apple });

    homePage.getNavigationComponent().filter.set({
      filter: Filters.price,
      value: Filters.sevenToEightHundred,
    });

    // And I sort products by price
    resultsPage
      .getNavigationComponent()
      .sort.set({ sortBy: SortOptions.priceLowToHigh });
    resultsPage.shouldProductPricesBeShown();
    resultsPage.shouldProductBeSortedAscending();
  });
});
