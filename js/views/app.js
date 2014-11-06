var AppView = Backbone.View.extend({
  el: '.app',

  events: {
    'click .request-button': 'request'  
  },

  initialize: function () {
   this.render(); 
  },

  render: function () {
    this.$el.html(Templates.app());

    return this;
  },

  request: function(e) {
    e.preventDefault();

    var email = "unused",
      token = localStorage.getItem('token');

    var auth = 'Basic ' + btoa(email + ":" + token)

    console.log(auth);

    $.ajax({
      url: 'http://localhost:8080/api/test/',
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
      console.log(data);
    })
    .fail(function(data) {
      console.log("fail");
      console.log(data);
    })
  }
});
