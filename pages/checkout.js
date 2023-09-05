const { I } = inject();

module.exports = { 
  h1 : {xpath : '//*[@id="content"]/h1'},
  a2 : {xpath: '//a[contains(text(),"Step 2:")]'},
  a3 : {xpath: '//a[contains(text(),"Step 3:")]'},
  a4 : {xpath: '//a[contains(text(),"Step 4:")]'},
  a5 : {xpath: '//a[contains(text(),"Step 5:")]'},
  a6 : {xpath: '//a[contains(text(),"Step 6:")]'},
  firstNameInput : {xpath: '//input[@name="firstname"]'},
  lastNameInput : {xpath: '//input[@name="lastname"]'},
  addressInput : {xpath: '//input[@name="address_1"]'},
  cityInput : {xpath: '//input[@name="city"]'},
  postCodeInput : {xpath: '//input[@name="postcode"]'},
  countryInput : {xpath: '//select[@name="country_id"]'},
  stateInput : {xpath : '//select[@name="zone_id"]'},
  termsAndConditionsInput : {xpath : '//input[@name="agree"]'},
  confirmTotalPrice : {xpath: '//table/tfoot/tr[1]/td[2]'},
  confirmFlatShippingRate : {xpath: '//table/tfoot/tr[2]/td[2]'},


  verifyCheckOutAccountPage() {
    const titleText = 'Checkout';
    I.waitForVisible('//*[@id="content"]/h1',10);
    I.seeTextEquals(titleText, this.h1);
  },

  fillBillingDetails (user) {
    I.scrollTo(this.a2);
    I.fillField(this.firstNameInput, user.firstName);
    I.fillField(this.lastNameInput, user.lastName);
    I.fillField(this.addressInput, user.address);
    I.fillField(this.cityInput, user.city);
    I.fillField(this.postCodeInput, user.postCode);
    I.selectOption(this.countryInput, user.country);
    I.selectOption(this.stateInput, user.state);
    I.clickContinue();
  },
  
  acceptDeliveryDetail () {
    I.scrollTo(this.a3);
    I.clickContinue();
  },
  
  acceptDeliveryMethod () {
    I.scrollTo(this.a4);
    I.clickContinue();
  },
  
  acceptPaymentMethod () {
    I.scrollTo(this.a5);
    I.waitForVisible(this.termsAndConditionsInput, 10);
    I.click(this.termsAndConditionsInput);
    I.clickContinue();
  },

  acceptConfirmOrder () {
    I.scrollTo(this.a6);
    I.click('//input[@value="Confirm Order"]');
  },

  async getTotalPriceFromConfirmOrder () {
    I.waitForVisible(this.confirmTotalPrice, 10);
    I.dontSeeElement('//input[@value="Continue"]',10)
    let totalPrice = +(I.getPriceFromString(await I.grabTextFrom(this.confirmTotalPrice)));
    return +(totalPrice);
  },

  async getFlatPriceFromConfirmOrder () {
    I.waitForVisible(this.confirmTotalPrice, 10);
    I.dontSeeElement('//input[@value="Continue"]',10)
    let flatShippingRate = +(I.getPriceFromString(await I.grabTextFrom(this.confirmFlatShippingRate)));
    return +(flatShippingRate);
  },
}
