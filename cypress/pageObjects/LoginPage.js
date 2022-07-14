import BasePage from "./BasePage";

class LoginPage extends BasePage {
  static get url() {
    return "https://www.saucedemo.com";
  }

  static get Input_Username() {
    return cy.get('[data-test="username"]')
  }

  static get Input_Password() {
    return cy.get('[data-test="password"]')
  }

  static get Button_Login() {
    return cy.get('[data-test="login-button"]')
  }

  static get Validate_ErrorMessage() {
    return cy.get('[data-test="error"]')
  }

}

export default LoginPage;