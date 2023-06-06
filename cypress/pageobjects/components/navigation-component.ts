export class NavigationComponent {
  expandSidebarMenu = () => {
    this.hamburegMenuButton.should("be.visible").and("not.be.disabled").click();
  };

  navigateTo = (options: { item: string }) => {
    this.menuItems.contains(options.item).should("be.visible").click();
  };

  get hamburegMenuButton() {
    return cy.get("#nav-hamburger-menu");
  }

  get menuItems() {
    return cy.get("a.hmenu-item");
  }

  filter = {
    set: (options: { filter: string; value: string }) => {
      cy.get(`#${options.filter}`)
        .should("be.visible")
        .within(() => {
          cy.contains(options.value).should("be.visible").click();
        });
    },
  };

  sort = {
    set: (options: { sortBy: string }) => {
      this.sort.sortByDropdown
        .should("be.visible")
        .and("not.be.disabled")
        .click();
      this.sort.dropdownOptions
        .contains(options.sortBy)
        .should("be.visible")
        .click();
    },

    get sortByDropdown() {
      return cy.get('[aria-label="Sort by:"]');
    },

    get dropdownOptions() {
      return cy.get("li.a-dropdown-item");
    },
  };
}
