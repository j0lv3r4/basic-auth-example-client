var FormSignupView = Backbone.View.extend({
  tagName: 'div',
  className: 'form-signup-container',

  events: {
    'submit form': 'signup'
  },

  initialize: function () {
    this.render();
  },

  render: function () {
    this.$el.html(_.template(Templates.form({ form: "form-signup", title: "Signup" })));  

    return this;
  },

  signup: function(e) {
    e.preventDefault();

    var serverEndpoint = "http://0.0.0.0:8080/create";

    var email = this.$el.find('form').find('input[type="email"]').val(),
      password = this.$el.find('form').find('input[type="password"]').val(),
      password_hashed = toolbox.passhash(email, password);

    console.log(email);
    console.log(password);
    console.log(password_hashed);

    // var token = "";

    // if (window.btoa) {
    //   token = btoa(email + ":" + password_hashed); 
    // } else {
    //   Base64.encode(email + ":" + password_hashed); 
    // }

    // console.log(token);
    
    console.log("Signup");

    $.ajax({
      url: serverEndpoint,
      data: { email: email, password: password_hashed },
      type: 'POST',
      success: function() {
        location.href = "#login";
      },
      error: function() {
        console.log("Error");       
      }
    })
  }
});
