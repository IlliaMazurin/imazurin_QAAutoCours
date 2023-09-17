const TxtFileReader = require("../helpers/txtFileReader");

const path = './input/idProduct.txt';
const DataInFile = TxtFileReader.fileReader(path);
const productIdsArray = TxtFileReader.convertStringToArray(DataInFile);

Feature('test file reader');

Data(productIdsArray).Scenario('Open product pages from idProduct.txt',  async ({ I , current , productPage , checkoutPage , successPage }) => {
    I.amOnPage(`index.php?route=product/product&product_id=${current}`);

    // let priceOnProductPage =  await productPage.getProductPrice();
    // priceOnProductPage += await productPage.selectColor(current.color);
    // priceOnProductPage += await productPage.selectSize(current.size);
    // productPage.addToCart();
    
    // I.proceedToCheckout();

    // checkoutPage.verifyCheckOutAccountPage();
    // checkoutPage.fillBillingDetails(USER);
    // checkoutPage.acceptDeliveryDetail();
    // checkoutPage.acceptDeliveryMethod();
    // checkoutPage.acceptPaymentMethod();
    // const flatPrice = await checkoutPage.getFlatPriceFromConfirmOrder();
    // const totalPrice = await checkoutPage.getTotalPriceFromConfirmOrder();
    // I.assertEqual (priceOnProductPage + flatPrice, totalPrice, "Prices are not in match!");
    // checkoutPage.acceptConfirmOrder();

    // successPage.checkPage();
}).tag('txtReader');