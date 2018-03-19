const BaseController = RouteController.extend({
  onBeforeAction() {
    if (!this.ready()) return;
    AccountsUi.signInRequired(this);
  }
});

Routes.config({
  BaseController
});

Router.configure({
  layoutTemplate: 'mainLayout'
});

Router.route('/', () => Router.go('home'));
Router.route('home', {path: '/home', template: 'home', controller: BaseController});
