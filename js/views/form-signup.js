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

    var serverEndpoint = "http://0.0.0.0:8080/api/user/";

    var email = this.$el.find('form').find('input[type="email"]').val(),
      password = this.$el.find('form').find('input[type="password"]').val(),
      password_hashed = toolbox.passhash(email, password),
      $feedback = this.$el.find('.feedback');

    // var token = "";

    // if (window.btoa) {
    //   token = btoa(email + ":" + password_hashed); 
    // } else {
    //   Base64.encode(email + ":" + password_hashed); 
    // }

    // console.log(token);
    
    $.ajax({
      url: serverEndpoint,
      data: { email: email, password: password_hashed },
      type: 'POST',
      success: function(data) {
        console.log(data)
        $feedback.html("<div class='alert-success'>User Created! :)</div>");
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(jqXHR);
        console.log(textStatus);
        console.log(errorThrown);
        var status = jqXHR.status;
        
        if (status === 400) {
          $feedback.html("<div class='alert-error'>" + jqXHR.responseText + " :(</div>");
        } 

        if (status === 401) {
          $feedback.html("<div class='alert-error'>" + jqXHR.responseText + " D:</div>");
        }
      }
    });
  }
});
