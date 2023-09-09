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

Before(({ I, indexPage, cartPage }) => {
    I.login(USER);
    indexPage.openProductCart();
    cartPage.deletAllItem();
  });

Scenario('Add to cart prod id=44',  async ({ I , productPage, checkoutPage, successPage }) => {
    I.amOnPage('index.php?route=product/product&product_id=44');
    
    productPage.selectColor();
    let priceOnProductPage = await productPage.getProductNewPrice();
    priceOnProductPage += await productPage.getColorProductPrice(); 
    productPage.selectSize();
    priceOnProductPage += await productPage.getSizeProductPrice();
    productPage.addToCart();
    
    I.proceedToCheckout();

    checkoutPage.verifyCheckOutAccountPage();
    checkoutPage.fillBillingDetails(USER);
    checkoutPage.acceptDeliveryDetail();
    checkoutPage.acceptDeliveryMethod();
    checkoutPage.acceptPaymentMethod();
    const flatPrice = await checkoutPage.getFlatPriceFromConfirmOrder();
    const totalPrice = await checkoutPage.getTotalPriceFromConfirmOrder();
    I.assertEqual (priceOnProductPage + flatPrice, totalPrice, "Prices are not in match!");
    checkoutPage.acceptConfirmOrder();

    successPage.checkPage();
}).tag("id=44");