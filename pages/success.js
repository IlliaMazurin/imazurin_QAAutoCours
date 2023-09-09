const { I } = inject();

module.exports = {
  
  h1 : { xpath : '//*[@id="content"]/h1' },
  thankText : { xpath : '//*[@id="content"]/p[1]' },

  checkPage (USER) {
    let successText = '';
    let thankText = '';
    
    if (USER) {
      successText = 'Your Account Has Been Created!';
      thankText = 'Congratulations! Your new account has been successfully created!';
    } else {
      successText = 'Your order has been placed!';
      thankText = 'Your order has been successfully processed!';
    }
    
    I.waitForVisible(this.h1,10);
    I.seeTextEquals(successText, this.h1);
    I.waitForVisible(this.thankText,10);
    I.seeTextEquals(thankText, this.thankText);
  },
}
