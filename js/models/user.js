var User = Backbone.Model.extend({
  defaults: {
    email: "",
    password: "",
    role: "",
    data: {
      quotes: 0 
    }
  }
});

var Users = Backbone.Collection.extend({
  model: User,
  url: "/api/v1/user"
});
