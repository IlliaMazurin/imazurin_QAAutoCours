const { I } = inject();

module.exports = {
  myAccountSpoiler : { xpath : '//span[text()="My Account"]' },
  registerButton : { xpath : '//a[text()="Register"]' },
  signIn : { xpath : '//a[text()="Sign In"]' },
  signOut : { xpath : '//a[text()="Sign Out"]' },
  cartButton : { xpath : '//a[text()="Shopping Cart"]' },
  countItemInCart : { xpath : '//span[@id="cart-total2"]' },
  
    clickMyAccount () {
      I.click(this.myAccountSpoiler);
    },
  
    clickRegister () {
      this.clickMyAccount();
      I.click(this.registerButton);
    },

    clickSignIn () {
      I.click(this.signIn);
    },

    clickSignOut () {
      I.click(this.signOut);
    },

    openProductCart () {
      this.clickMyAccount();
      I.click(this.cartButton);
    },

    async getCountItemInCart () {
      const countItems = await I.grabTextFrom (this.countItemInCart);
      console.log(countItems);
      return +countItems;
    },
};
