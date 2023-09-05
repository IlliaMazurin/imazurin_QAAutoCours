const { I } = inject();

module.exports = {
  h1 : {xpath: '//*[@id="content"]/h1'},
  firstNameInput : {xpath: '//*[@id="input-firstname"]'},
  lastNameInput : {xpath: '//*[@id="input-lastname"]'},
  emailInput : {xpath: '//*[@id="input-email"]'},
  phoneInput : {xpath: '//*[@id="input-telephone"]'},
  passwordInput : {xpath: '//*[@id="input-password"]'},
  confirmPasswordInput : {xpath: '//*[@id="input-confirm"]'},
  privatePolicyAgree : {xpath : '//*[@name="agree"]'},
  submitButton : {xpath: ' //*[@value="Continue"]'},

  verifyRegisterAccountPage() {
   
    const regTitleText = 'Register Account';
    I.waitForVisible('//*[@id="content"]/h1',10);
    I.seeTextEquals(regTitleText, this.h1);
  },

  registerNewUserForm(user) {
    
    I.fillField(this.firstNameInput, user.firstName);
    I.fillField(this.lastNameInput, user.lastName);
    I.fillField(this.emailInput, user.email);
    I.fillField(this.phoneInput, user.phone);
    I.fillField(this.passwordInput, user.password);
    I.fillField(this.confirmPasswordInput, user.password);
    I.click(this.privatePolicyAgree);
    I.click(this.submitButton);
  },

  verifySuccessfullRegistration() {
    
    const regTitleText = 'Your Account Has Been Created!';

    I.waitForVisible('//*[@id="content"]/h1',10);
    I.seeTextEquals(regTitleText, this.h1);
  },
}