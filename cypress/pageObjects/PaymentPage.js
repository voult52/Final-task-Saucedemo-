import BasePage from "./BasePage";

class PaymentPage extends BasePage {
  static get url() {
    return "https://www.saucedemo.com/cart.html";
  }
  
  static get Button_CartCheckout() {
    return cy.get('[data-test="checkout"]')
  }

  static get Input_UserFirstName() {
    return cy.get('[data-test="firstName"]')
  }
  static get Input_UserLastName() {
    return cy.get('[data-test="lastName"]')
  }

  static get Input_UserPostalCode() {
    return cy.get('[data-test="postalCode"]')

  }

  static get Button_PaymentContinue() {
    return cy.get('[data-test="continue"]')

  }
  
  static get Validate_PaymentItem() {
    return  cy.get('.inventory_item_name')

  }

  static get Button_PaymentFinish() {
    return  cy.get('[data-test="finish"]')

  }
  static get Validate_SuccessfulOrder() {
    return  cy.get('.complete-header')

  }
  
}

export default PaymentPage;