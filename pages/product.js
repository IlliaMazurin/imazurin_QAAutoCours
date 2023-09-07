const { I } = inject();

module.exports = {

  priceNew : { xpath : '//span[@class="price-new"]'},
  productTitle : { xpath : '//h2[@class="product-title"]'},
  sizeDropdown : {xpath : '//label[@for="input-option22"]/following-sibling::div'},
  colorDropdown : {xpath : '//label[@for="input-option21"]/following-sibling::div'},
  sizeOption : { xpath : '//a[contains(text(), "Medium")]'},
  colorOption : { xpath : '//a[contains(text(), "White")]'},
  addButtonCart : { xpath : '//button[@id="button-cart"]'},

  selectColor () {
    I.click(this.colorDropdown);
    I.click(this.colorOption);
  },

  selectSize () {
    I.click(this.sizeDropdown);
    I.click(this.sizeOption);
  },

  addToCart () {
    I.click(this.addButtonCart);
  },

  async getProductNewPrice () {
    const newPrice = await I.grabTextFrom(this.priceNew);
    price = I.getPriceFromString(newPrice);
    return +price;
  },
  async getColorProductPrice () {
    const colorPrice = await I.grabTextFrom(this.colorOption);
    price = I.getPriceFromString(colorPrice);
    return +price;
  },
  async getSizeProductPrice () {
    const sizePrice = await I.grabTextFrom(this.sizeOption);
    price = I.getPriceFromString(sizePrice);
    return +price;
  },


}
