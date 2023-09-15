const { I } = inject();

module.exports = {

  priceNew : { xpath : '//span[@class="price-new"]' },
  fullprice : { xpath : '//div[@class="price"]/span' },
  productTitle : { xpath : '//h2[@class="product-title"]' },
  sizeDropdown : {xpath : '//label[text()="Size"]/following-sibling::div' },
  colorDropdown : {xpath : '//label[text()="Color"]/following-sibling::div' },
  // sizeSmallOption : { xpath : '//a[contains(text(), "Small")]' },
  // sizeMediumOption : { xpath : '//a[contains(text(), "Medium")]' },
  // sizeLargeOption : { xpath : '//a[contains(text(), "Large")]' },
  // colorWhiteOption : { xpath : '//a[contains(text(), "White")]' },
  // colorGreenOption : { xpath : '//a[contains(text(), "Green")]' },
  // colorGrayOption : { xpath : '//a[contains(text(), "Gray")]' },
  // colorBrownOption : { xpath : '//a[contains(text(), "Brown")]' },
  // colorBlackOption : { xpath : '//a[contains(text(), "Black")]' },
  addButtonCart : { xpath : '//button[@id="button-cart"]' },

  async selectColor (color) {
    if (await this.checkElementExist(this.colorDropdown)) {
      I.click(this.colorDropdown);
      I.click(`//a[contains(text(), "${color}")]`);
      const colorPrice = await I.grabTextFrom(`//a[contains(text(), "${color}")]`);
      price = I.getPriceFromString(colorPrice);
    } else {
      price = 0;
    }
    return +price;
  },

  async selectSize (size) {
    if (await this.checkElementExist(this.sizeDropdown)) {
      I.click(this.sizeDropdown);
      I.click(`//a[contains(text(), "${size}")]`);
      const sizePrice = await I.grabTextFrom(`//a[contains(text(), "${size}")]`);
      price = I.getPriceFromString(sizePrice);
    } else {
      price = 0;
    }
    return +price;
  },

  addToCart () {
    I.click(this.addButtonCart);
  },

  async getProductPrice () {
    if (await this.checkElementExist(this.priceNew)) {
      const priceString = await I.grabTextFrom(this.priceNew);
      price = I.getPriceFromString(priceString);
    } else {
      const priceString = await I.grabTextFrom(this.fullprice);
      price = I.getPriceFromString(priceString);
    }
    return +price;
  },

  async checkElementExist(element) {
    return await tryTo(() => I.seeElement(element));
  }
}
