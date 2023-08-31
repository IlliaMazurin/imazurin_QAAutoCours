const { I } = inject();

module.exports = {
  h1 : {xpath: '//*[@id="content"]/h1'},
  firstNameInput : {xpath: '//*[@id="input-firstname"]'},
  lastNameInput : {xpath: '//*[@id="input-lastname"]'},
  emailInput : {xpath: '//*[@id="input-email"]'},
  phoneInput : {xpath: '//*[@id="input-telephone"]'},
  passwordInput : {xpath: '//*[@id="input-password"]'},
  confirmPasswordInput : {xpath: '//*[@id="input-confirm"]'},
  privatePoliciAgree : {xpath : '//*[@id="content"]/form/div/div/input[1]'},
  submitButton : {xpath: '//*[@id="content"]/form/div/div/input[2]'},

  verifyRegisterAccountPage() {
    const regTitleText = 'Register Account';
    I.seeTextEquals(regTitleText, this.h1);
  },

  fillNewUserForm(user) {
    I.fillField(this.firstNameInput, user.firstName);
    I.fillField(this.lastNameInput, user.lastName);
    I.fillField(this.emailInput, user.email);
    I.fillField(this.phoneInput, user.phone);
    I.fillField(this.passwordInput, user.password);
    I.fillField(this.confirmPasswordInput, user.confirmPassword);
    I.click(this.privatePoliciAgree);
    I.click(this.submitButton);
  },

  verifySuccessfullRegistration() {
    I.seeTextEquals(h1, 'Your Account Has Been Created!');
  }
}