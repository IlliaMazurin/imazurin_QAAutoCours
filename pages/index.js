const { I } = inject();

module.exports = {
  myAccountSpoiler: { xpath: '//*[span[text()="My Account"]]'},
  registerButton: { xpath: '//*[a[text()="Register"]]'},
  
    clickMyAccount() {
      I.click(this.myAccountSpoiler);
    },
  
    clickRegister() {
      I.click(this.registerButton);
    }
}
