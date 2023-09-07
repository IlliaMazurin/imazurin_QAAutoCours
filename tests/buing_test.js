const success = require("../pages/success");

const USER = {
    firstName : 'Jone',
    lastName : '007',
    email : 'test@test.io',
    phone : '+123456789000',
    password : '123456QWErty',
    address : '49 Washington St, Newark, NJ 07102, United States',
    city : 'New Your',
    postCode: '07102',
    country : '223',
    state : 'New York',

};

Feature('buy product');

Before(({ I }) => {
    I.login(USER);
  });

Scenario('Add to cart prod id=44',  async ({ I , productPage, checkoutPage }) => {
    let priceOnProductPage = 0;
    let flatPrice = 0;
    let totalPrice = 0;

    I.amOnPage('index.php?route=product/product&product_id=44');
    
    productPage.selectColor();
    priceOnProductPage = await productPage.getProductNewPrice();
    priceOnProductPage += await productPage.getColorProductPrice(); 
    productPage.selectSize();
    priceOnProductPage += await productPage.getSizeProductPrice();
    productPage.addToCart();
    I.prossedToCheckOut();

    checkoutPage.verifyCheckOutAccountPage();
    checkoutPage.fillBillingDetails(USER);
    checkoutPage.acceptDeliveryDetail();
    checkoutPage.acceptDeliveryMethod();
    checkoutPage.acceptPaymentMethod();
    flatPrice = await checkoutPage.getFlatPriceFromConfirmOrder();
    totalPrice = await checkoutPage.getTotalPriceFromConfirmOrder();
    I.assertEqual (priceOnProductPage + flatPrice, totalPrice, "Prices are not in match!");
    checkoutPage.acceptConfirmOrder();

    success.checkPage();
}).tag("id=44");