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

let productLink = new DataTable (['productLink', 'size', 'color']);
productLink.add(['index.php?route=product/product&product_id=44', 'Medium', 'White']); //[medium], [white, brown, gray]
productLink.add(['index.php?route=product/product&product_id=48', 'Large', 'Green']); //[large], [green, gray, black]
productLink.add(['index.php?route=product/product&product_id=68', '', '']); //
productLink.add(['index.php?route=product/product&product_id=45', 'Large', 'Gray']); //[large], [green, gray, black]


Feature('buy product');

Before(({ I, indexPage, cartPage }) => {
    I.login(USER);
    if (!(indexPage.getCountItemInCart == 0)) {
        indexPage.openProductCart();
        cartPage.deletAllItem();
    };
  });

Data(productLink).Scenario('add products to cart and confirm order',  async ({ I , current , productPage , checkoutPage , successPage }) => {
    I.amOnPage(current.productLink);
    
    let priceOnProductPage =  await productPage.getProductPrice();
    priceOnProductPage += await productPage.selectColor(current.color);
    priceOnProductPage += await productPage.selectSize(current.size);
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
}).tag("buy");