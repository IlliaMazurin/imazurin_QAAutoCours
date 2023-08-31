Feature('register');

Scenario('Fill fields, user case, pozitive',  ({ I, indexPage, registerPage, successPage }) => {
    const USER = {
        firstName : 'Jone',
        lastName : '007',
        email : Date.now() + '@test.io',
        phone : '+123456789000',
        password : '123456QWErty',
        confirmPassword : '123456QWErty',
    };

    I.amOnPage('/');

    indexPage.clickMyAccount();
    indexPage.clickRegister();
    I.waitForVisible('//*[@id="content"]/h1',10);

    registerPage.verifyRegisterAccountPage();
    registerPage.fillNewUserForm(USER);

    successPage.checkPage();
    
});
