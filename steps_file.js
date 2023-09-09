// in this file you can append custom step methods to 'I' object
const signInButton = { xpath: '//a[text()="Sign In"]' };
const emailField = { xpath: '//input[@type="email"]' };
const passwordField = { xpath: '//input[@type="password"]' };
const loginButton = { xpath: '//input[@type="submit"]' };
const signOutButton = { xpath : '//a[text()="Sign Out"]' };
const cartButton = { xpath : '//i[@class="linearicons-cart"]' };
const checkoutButton = { xpath : '//i[@class="linearicons-arrow-right"]' };
const continueButton = { xpath : '//input[@value="Continue"]' };
const loadingButton = { xpath : '//input[@value="Loading..."]' };


module.exports = function() {
  return actor({
    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

    login(user) {
      this.amOnPage('/');
      this.click(signInButton );
      this.fillField(emailField , user.email );
      this.fillField(passwordField , user.password );
      this.click(loginButton) ;
      this.seeElement(signOutButton);
      this.seeInTitle('My Account');
      this.dontSeeElementInDOM(signInButton);

    },

    proceedToCheckout() {
      this.click(cartButton);
      this.click(checkoutButton);
    },

    clickContinue() {
      this.click(continueButton);
      this.waitForInvisible(loadingButton);
    },

    getPriceFromString(arg) {
      let regex = /([\d.]+)/;
      let matches = arg.match(regex);
      let price = 0;

      if (matches) {
        price = matches[1];
      } else {
        console.log('Price not found in the text!');
      } 
      return price;
    },
  });
}
