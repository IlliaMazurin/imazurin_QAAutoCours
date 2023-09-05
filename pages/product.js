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
    const NewPrice = await I.grabTextFrom(this.priceNew);
    let ProductPrice = I.getPriceFromString(NewPrice);
    return (ProductPrice);
  },
  async getColorProductPrice () {
    const ColorPrice = await I.grabTextFrom(this.colorOption);
    ProductPrice = I.getPriceFromString(ColorPrice);
    return (ProductPrice);
  },
  async getSizeProductPrice () {
    const SizePrice = await I.grabTextFrom(this.sizeOption);
    ProductPrice = I.getPriceFromString(SizePrice);
    return (ProductPrice);
  },

  selectSize () {
    I.click(this.sizeDropdown);
    I.click(this.sizeOption);
  },
}
