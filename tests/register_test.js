const { openRegisterPage, confirmPasswordInput } = require("../pages/register");

Feature('register');

Scenario('Fill fields, user case, pozitive',  ({ I, indexPage, registerPage, successPage }) => {
    const USER = {
        firstName : 'Jone',
        lastName : '007',
        email : Date.now() + '@test.io',
        phone : '+123456789000',
        password : '123456QWErty',
        confirmPassword : '123456QWErty'
    };

    I.amOnPage('/');
    indexPage.clickMyAccount();
    indexPage.clickRegister();
    registerPage.verifyRegisterAccountPage();
    registerPage.registerNewUserForm(USER);
    
    
    registerPage.verifySuccessfullRegistration();

    successPage.checkPage();
});
