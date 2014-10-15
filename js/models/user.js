var User = Backbone.Model.extend({
  defaults: {
    email: "",
    password: ""
  }
});

var Users = Backbone.Collection.extend({
  model: User,
  url: ""
});
