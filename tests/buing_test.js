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

    I.amOnPage('index.php?route=product/product&product_id=44');
    
    productPage.selectColor();
    productPage.selectSize();
   // let priceOnProductPage = productPage.getNewProductPrice() + productPage.getColorProductPrice + productPage.getSizeProductPrice;
    I.prossedToCheckOut();

    checkoutPage.verifyCheckOutAccountPage();
    checkoutPage.fillBillingDetails(USER);
    checkoutPage.acceptDeliveryDetail();
    checkoutPage.acceptDeliveryMethod();
    checkoutPage.acceptPaymentMethod();
   // let flatPrice = checkoutPage.getFlatPriceFromConfirmOrder();
   // let totalPrice = checkoutPage.getTotalPriceFromConfirmOrder();
   
   // I.assertEqual(priceOnProductPage + flatPrice, totalPrice), "Prices are not in match!");
    //checkoutPage.acceptConfirmOrder();







}).tag("id=44");