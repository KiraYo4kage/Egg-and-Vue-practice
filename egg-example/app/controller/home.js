'use strict';

module.exports = app => {
  // console.log('kongzhiqi:---------'app.Controller);
  class HomeController extends app.Controller {
    * index() {
      this.ctx.body = 'hi, egg';
    }
  }
  return HomeController;
};
