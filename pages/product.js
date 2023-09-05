const { I } = inject();

module.exports = {

  priceNew : { xpath : '//span[@class="price-new"]'},
  productTitle : { xpath : '//h2[@class="product-title"]'},
  sizeDropdown : {xpath : '//label[@for="input-option22"]/following-sibling::div'},
  colorDropdown : {xpath : '//label[@for="input-option21"]/following-sibling::div'},
  sizeOption : { xpath : '//a[contains(text(), "Medium")]'},
  colorOption : { xpath : '//a[contains(text(), "White")]'},

  selectColor () {
    I.click(this.colorDropdown);
    I.click(this.colorOption);
  },

  async getNewProductPrice () {
    const newPrice = await I.grabTextFrom(this.priceNew);
    let price = I.getPriceFromString(newPrice);
    return (price);
  },
  async getColorProductPrice () {
    const colorPrice = await I.grabTextFrom(this.colorOption);
    let price = I.getPriceFromString(colorPrice);
    return (ProductPrice);
  },
  async getSizeProductPrice () {
    const sizePrice = await I.grabTextFrom(this.sizeOption);
    let price = I.getPriceFromString(sizePrice);
    return (price);
  },

  selectSize () {
    I.click(this.sizeDropdown);
    I.click(this.sizeOption);
  },
}
