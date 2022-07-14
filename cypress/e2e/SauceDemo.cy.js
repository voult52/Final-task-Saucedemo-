import HomePage from "../pageObjects/HomePage";
import LoginPage from "../pageObjects/LoginPage"


// - Part 1 - Swag Labs - https://www.saucedemo.com/
//     - Create scenarios:

 

 
// +





describe("Login Page", () => {
  beforeEach(() => {
    LoginPage.visit();
  });
  it("1. Login with locked_out_user", ()=>{
        // - Enter username - “locked_out_user”
        LoginPage.Input_Username.type("locked_out_user")
        //- Enter password
        LoginPage.Input_Password.type("secret_sauce")
        LoginPage.Button_Login.click()
        // - Validate that user sees error - “Epic sadface: Sorry, this user has been locked out.”
        LoginPage.Validate_ErrorMessage.should("have.text", "Epic sadface: Sorry, this user has been locked out.")
})

it("2. Login with wrong password", ()=>{
  // - Enter username - standard_user
  LoginPage.Input_Username.type("standard_user")
  //- Enter a wrong password
  LoginPage.Input_Password.type("Upsidown")
  LoginPage.Button_Login.click()
  // - Validate that user sees error - “Epic sadface: Username and password do not match any user in this service”s
  LoginPage.Validate_ErrorMessage.should("have.text", "Epic sadface: Username and password do not match any user in this service")
})

it("3. Validate item amount", ()=>{
  // - Log into page with standard user credentials
  LoginPage.Input_Username.type("standard_user")
  LoginPage.Input_Password.type("secret_sauce")
  LoginPage.Button_Login.click()
  // - Validate that default item amount is 6
  HomePage.Validate_ItemCount.should("have.length", "6")
 
})

it("4. Sort items - Price high to low", ()=>{
  // - Log into page with standard user credentials
  LoginPage.Input_Username.type("standard_user")
  LoginPage.Input_Password.type("secret_sauce")
  LoginPage.Button_Login.click()
  // - Set filter to Price high to low
  HomePage.Selector_ItemSorting.select(3)
  // - Validate that first item is “Sauce Labs Fleece Jacket”
  HomePage.Validate_ItemCount.first().should("contain.text", "Sauce Labs Fleece Jacket")
    // - Validate that the first item costs “$49.99”
  HomePage.Validate_ItemPrice.first().should("have.text", "$49.99")
})

it("5. Sort items - Price low to High", ()=>{
// - Log into page with standard user credentials
LoginPage.Input_Username.type("standard_user")
LoginPage.Input_Password.type("secret_sauce")
LoginPage.Button_Login.click()
// - Set filter to Price low to high
HomePage.Selector_ItemSorting.select(2)
// - Validate that first item is “Sauce Labs Onesie”
HomePage.Validate_ItemCount.first().should("contain.text", "Sauce Labs Onesie")
//  - Validate that the first item costs “$7.99”
HomePage.Validate_ItemPrice.first().should("have.text", "$7.99")


})
   
it("6. Sort items - Name (Z to A)", ()=>{
  // - Log into page with standard user credentials
  LoginPage.Input_Username.type("standard_user")
  LoginPage.Input_Password.type("secret_sauce")
  LoginPage.Button_Login.click()
  //- Set filter to Name (Z to A)
  HomePage.Selector_ItemSorting.select(1)
  // - Validate that first item is “Test.allTheThings() T-Shirt (Red)”
  HomePage.Validate_ItemCount.first().should("contain.text", "Test.allTheThings() T-Shirt (Red)")
  
  })

  it("7. Validate shopping cart badge amount", ()=>{
    // - Log into page with standard user credentials
    LoginPage.Input_Username.type("standard_user")
    LoginPage.Input_Password.type("secret_sauce")
    LoginPage.Button_Login.click()
    // - Open “Sauce Labs Bolt T-Shirt”
    HomePage.Button_ItemName.contains("Sauce Labs Bolt T-Shirt").click()
    // - Click “Add to cart“
    HomePage.Button_AddCart.click()
    // - Validate that shoping cart badge is 1 (the red pop-up number)
    HomePage.Validate_CartIndicator.should("have.text", "1")
    // - Click “Back to products”
    HomePage.Button_BackToAllItems.click()
    // - Open “Sauce Labs Bike Light”
    HomePage.Button_ItemName.contains("Sauce Labs Bike Light").click()
    // - Click “Add to cart”
    HomePage.Button_AddCart.click()
    // - Validate that shoping cart badge is 2 (the red pop-up number)
    HomePage.Validate_CartIndicator.should("have.text", "2")

    
    })

    it("8. Reset App State", ()=>{
      // - Log into page with standard user credentials
      LoginPage.Input_Username.type("standard_user")
      LoginPage.Input_Password.type("secret_sauce")
      LoginPage.Button_Login.click()
      // - Open “Sauce Labs Bolt T-Shirt”
      HomePage.Button_ItemName.contains("Sauce Labs Bolt T-Shirt").click()
      // - Click “Add to cart“
      HomePage.Button_AddCart.click()
      // - Click “Back to products”
      HomePage.Button_BackToAllItems.click()
      // - Validate that shoping cart badge is 1 (the red pop-up number)
      HomePage.Validate_CartIndicator.should("have.text", "1")
      // - Click “Stack/Burger” icon
      HomePage.Button_BurgerMenu.click()
      // - Click “Reset App State”
      HomePage.Button_ResetState.click()
      // - Validate that the badge no longer exists
      HomePage.Validate_CartIndicator.should("not.exist")
      })

      it("9. Validate shopping cart remove button functionality", ()=>{
        // - Log into page with standard user credentials
        LoginPage.Input_Username.type("standard_user")
        LoginPage.Input_Password.type("secret_sauce")
        LoginPage.Button_Login.click()
        // - Open “Sauce Labs Bolt T-Shirt”
        HomePage.Button_ItemName.contains("Sauce Labs Bolt T-Shirt").click()
        // - Click “Add to cart“
        HomePage.Button_AddCart.click()
        // - Validate that shoping cart badge is 1 (the red pop-up number)
        HomePage.Validate_CartIndicator.should("have.text", "1")
        // - Click “Remove” button
        HomePage.Button_RemoveItem.click()
        // - Validate that the badge no longer exists
        HomePage.Validate_CartIndicator.should("not.exist")

        })

        it("10. Buy a T-shirt", ()=>{
          // - Log into page with standard user credentials
          LoginPage.Input_Username.type("standard_user")
          LoginPage.Input_Password.type("secret_sauce")
          LoginPage.Button_Login.click()
          //- Open “Test.allTheThings() T-Shirt (Red)”
          HomePage.Button_ItemName.contains("Test.allTheThings() T-Shirt (Red)").click()
          // - Click “Add to cart”
          HomePage.Button_AddCart.click()
          //- Click “Shopping cart”
          HomePage.Button_Cart.click()
          // - Click “Checkout”
          HomePage.Button_CartCheckout.click()
          // - Fill in First name
          HomePage.Input_UserFirstName.type("Deniss")
          // - Fill in Last name
          HomePage.Input_UserLastName.type("Belinskis")
          // - Fill in ZIP/Postal code
          HomePage.Input_UserPostalCode.type("LV-1212")
          // - Click Continue
          HomePage.Button_PaymentContinue.click()
          // - Validate item name “Test.allTheThings() T-Shirt (Red)”
          HomePage.Validate_PaymentItem.should("contain.text", "Test.allTheThings() T-Shirt (Red)")
          // - Click “Finnish”
          HomePage.Button_PaymentFinish.click()
          // - Validate header “THANK YOU FOR YOUR ORDER”
          HomePage.Validate_SuccessfulOrder.should("have.text", "THANK YOU FOR YOUR ORDER")
  
          })
});

