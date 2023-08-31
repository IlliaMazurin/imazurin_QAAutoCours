const { I } = inject();

module.exports = {
  h1 : {xpath: '//*[@id="content"]/h1'},
  contineButton : {xpath: '//*[@id="content"]/div/div/a'},
  thankText : {xpath: '//*[@id="content"]/p[1]'},

  checkPage() {
    const SuccessText = 'Your Account Has Been Created!';
    const ThankText = 'Congratulations! Your new account has been successfully created!';
    I.seeTextEquals(SuccessText, this.h1);
    I.seeTextEquals(ThankText, this.thankText);
  },

  continue() {
    I.click(this.contineButton);
  },
}
