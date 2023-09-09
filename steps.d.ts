/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type indexPage = typeof import('./pages/index.js');
type registerPage = typeof import('./pages/register.js');
type successPage = typeof import('./pages/success.js');
type productPage = typeof import('./pages/product.js');
type checkoutPage = typeof import('./pages/checkout.js');
type ChaiWrapper = import('codeceptjs-chai');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, indexPage: indexPage, registerPage: registerPage, successPage: successPage, productPage: productPage, checkoutPage: checkoutPage }
  interface Methods extends Playwright, ChaiWrapper {}
  interface I extends ReturnType<steps_file>, WithTranslation<ChaiWrapper> {}
  namespace Translation {
    interface Actions {}
  }
}
