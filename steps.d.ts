/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type indexPage = typeof import('./pages/index.js');
type registerPage = typeof import('./pages/register.js');
type successPage = typeof import('./pages/success.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, indexPage: indexPage, registerPage: registerPage, successPage: successPage }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
