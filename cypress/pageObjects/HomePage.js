import BasePage from "./BasePage";

class HomePage extends BasePage {
  static get url() {
    return "https://www.saucedemo.com";
  }

  static get Validate_ItemCount() {
    return cy.get('[class="inventory_item"]')
  }

  static get Selector_ItemSorting() {
    return cy.get('[data-test="product_sort_container"]')
  }
  static get Validate_ItemPrice() {
    return cy.get('.inventory_item_price')
  }

  static get Button_ItemName() {
    return cy.get('.inventory_item_name')
  }
  
  static get Button_AddCart() {
    return cy.get('button[class="btn btn_primary btn_small btn_inventory"]')
  }
  static get Validate_CartIndicator() {
    return cy.get('[class="shopping_cart_badge"]')
  }

  static get Button_BackToAllItems() {
    return cy.get('[data-test="back-to-products"]')
  }

  static get Button_BurgerMenu() {
    return cy.get('#react-burger-menu-btn')
  }

  static get Button_ResetState() {
    return cy.get('#reset_sidebar_link')
  }

  static get Button_RemoveItem() {
    return cy.get('[class="btn btn_secondary btn_small btn_inventory"]')
  }
  
  static get Button_Cart() {
    return cy.get('.shopping_cart_link')
  }
  
}

export default HomePage;