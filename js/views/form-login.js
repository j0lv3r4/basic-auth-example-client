var FormLoginView = Backbone.View.extend({
  tagName: 'div',
  className: 'form-login-container',

  events: {
    'submit form': 'login'
  },

  initialize: function () {
    this.render();
  },

  render: function () {
    this.$el.html(_.template(Templates.form({ form: "form-login", title: "Login" })));  

    return this;
  },

  login: function(e) {
    e.preventDefault();

    var email = this.$el.find('form').find('input[type="email"]').val(),
      password = this.$el.find('form').find('input[type="password"]').val();

    var token = "";

    if (window.btoa) {
      token = btoa(email + ":" + password); 
    } else {
      Base64.encode(email + ":" + password); 
    }

    console.log(token);

    console.log("login");
  }
});
