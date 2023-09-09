const { I } = inject();

module.exports = {
  countItemInTable : { xpath : '//div[@class="table-responsive"]/table/tbody/tr' },
  deleteItemButton : { xpath : '//button[@class="btn btn-danger"]' },
  
  async deletAllItem () {
    let countItem = await I.grabNumberOfVisibleElements(this.countItemInTable);
    while (countItem) {
      I.click(this.deleteItemButton);
      countItem --;
    };
  },
}
