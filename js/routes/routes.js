var $app = $('.app'),
  Router = Backbone.Router.extend({
  routes: {
    "": "index",
    "login": "login",
    "signup": "signup",
    "app": "app",
    "logout": "logout"
  },

  initialize: function() {
    console.log("backbone router initialized");             
  },

  index: function() {
    new IndexView();
  },

  login: function() {
    var formLoginView = new FormLoginView();

    $app.html(formLoginView.render().el);
  },

  signup: function() {
    var formSignupView = new FormSignupView();

    $app.html(formSignupView.render().el);
  },

  app: function() {
    new AppView();
  },

  logout: function() {}
});
