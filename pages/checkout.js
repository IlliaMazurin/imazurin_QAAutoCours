const { I } = inject();

module.exports = { 
  h1 : { xpath : '//*[@id="content"]/h1' },
  step2Section : { xpath : '//a[contains(text(),"Step 2:")]' },
  step3Section : { xpath : '//a[contains(text(),"Step 3:")]' },
  step4Section : { xpath : '//a[contains(text(),"Step 4:")]' },
  step5Section : { xpath : '//a[contains(text(),"Step 5:")]' },
  step6Section : { xpath : '//a[contains(text(),"Step 6:")]' },
  existingAddressInput : { xpath : '//label[@for="payment_addressexisting0"]' },
  firstNameInput : { xpath : '//input[@name="firstname"]' },
  lastNameInput : { xpath : '//input[@name="lastname"]' },
  addressInput : { xpath : '//input[@name="address_1"]' },
  cityInput : { xpath : '//input[@name="city"]' },
  postCodeInput : { xpath : '//input[@name="postcode"]' },
  countryInput : { xpath : '//select[@name="country_id"]' },
  stateInput : { xpath : '//select[@name="zone_id"]' },
  termsAndConditionsInput : { xpath : '//input[@name="agree"]' },
  confirmTotalPrice : { xpath : '//table/tfoot/tr[3]/td[2]' },
  confirmFlatShippingRate : { xpath : '//table/tfoot/tr[2]/td[2]' },
  confirmOrderButton : { xpath : '//input[@value="Confirm Order"]' },

  verifyCheckOutAccountPage () {
    const titleText = 'Checkout';
    I.waitForVisible(this.h1,10);
    I.seeTextEquals(titleText, this.h1);
  },

  fillBillingDetails (user) {
    I.scrollTo(this.step2Section);
    if (!this.existingAddressInput){
      I.fillField(this.firstNameInput, user.firstName);
      I.fillField(this.lastNameInput, user.lastName);
      I.fillField(this.addressInput, user.address);
      I.fillField(this.cityInput, user.city);
      I.fillField(this.postCodeInput, user.postCode);
      I.selectOption(this.countryInput, user.country);
      I.selectOption(this.stateInput, user.state);
    }
    I.clickContinue();
  },
  
  acceptDeliveryDetail () {
    I.scrollTo(this.step3Section);
    I.clickContinue();
  },
  
  acceptDeliveryMethod () {
    I.scrollTo(this.step4Section);
    I.clickContinue();
  },
  
  acceptPaymentMethod () {
    I.scrollTo(this.step5Section);
    I.waitForVisible(this.termsAndConditionsInput, 10);
    I.click(this.termsAndConditionsInput);
    I.clickContinue();
  },

  acceptConfirmOrder () {
    I.scrollTo(this.step6Section);
    I.click(this.confirmOrderButton);
  },

  async getTotalPriceFromConfirmOrder () {
    I.waitForVisible(this.confirmTotalPrice, 10);
    draftPrice = await I.grabTextFrom(this.confirmTotalPrice);
    price = I.getPriceFromString(draftPrice);
    return +price;
  },

  async getFlatPriceFromConfirmOrder () {
    I.waitForVisible(this.confirmFlatShippingRate, 10);
    draftPrice = await I.grabTextFrom(this.confirmFlatShippingRate);
    price = I.getPriceFromString(draftPrice);
    return +price;
  },
}
