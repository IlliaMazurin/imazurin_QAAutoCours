const Helper = require('@codeceptjs/helper');

class PriceToString extends Helper {

  async getPriceFromString(string) {
    const clearStringPrice = string.replace(/[^\d.]/g, '');
    return parseFloat(clearStringPrice);
  }

  async checkElementExist(element) {
    return await tryTo(() => I.seeElement(element));
  }

  // add custom methods here
  // If you need to access other helpers
  // use: this.helpers['helperName']
}
module.exports = PriceToString;