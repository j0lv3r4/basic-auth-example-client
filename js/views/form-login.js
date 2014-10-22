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
      password = this.$el.find('form').find('input[type="password"]').val(),
      password_hashed = toolbox.passhash(email, password);

    var auth = 'Basic ' + btoa(email + ":" + password_hashed)

    console.log(auth);

    $.ajax({
      url: 'http://localhost:8080/api/token/',
      method: 'GET',
      // crossDomain: true,
      // xhrFields: {
      //   withCredentials: true 
      // },
      headers: {
        Authorization: auth 
      }
    })
    .done(function(data) {
      console.log("done")
      console.log(data); 
    })
    .fail(function(data) {
      console.log("fail")
      console.log(data); 
    })
  }
});
