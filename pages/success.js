const { I } = inject();

module.exports = {
  
  h1 : {xpath: '//*[@id="content"]/h1'},
  contineButton : {xpath: '//*[@class="btn btn-primary"]'},
  thankText : {xpath: '//*[@id="content"]/p[1]'},

  checkPage() {
    
    const SuccessText = 'Your Account Has Been Created!';
    const ThankText = 'Congratulations! Your new account has been successfully created!';

    I.waitForVisible(this.h1,10);
    I.seeTextEquals(SuccessText, this.h1);
    I.waitForVisible(this.thankText,10);
    I.seeTextEquals(ThankText, this.thankText);
  },
}
