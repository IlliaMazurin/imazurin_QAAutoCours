// in this file you can append custom step methods to 'I' object
signInButton = { xpath: '//a[text()="Sign In"]' };
emailField = { xpath: '//input[@type="email"]' };
passwordField = { xpath: '//input[@type="password"]' };
loginButton = { xpath: '//input[@type="submit"]' };
signOutButton = { xpath : '//a[text()="Sign Out"]' };
cartButton = { xpath : '//i[@class="linearicons-cart"]'};
checkoutButton = { xpath : '//i[@class="linearicons-arrow-right"]'};
continueButton = { xpath : '//input[@value="Continue"]'};


module.exports = function() {
  return actor({
    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

    login(user) {
      this.amOnPage('/');
      this.click( signInButton );
      this.fillField( emailField , user.email );
      this.fillField( passwordField , user.password );
      this.click( loginButton) ;
      this.seeElement(signOutButton);
      this.seeInTitle('My Account');
      this.dontSeeElementInDOM(signInButton);

    },

    prossedToCheckOut() {
      this.click(cartButton);
      this.click(checkoutButton);
    },

    clickContinue() {
      this.click(continueButton);
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
