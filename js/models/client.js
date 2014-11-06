var Client = Backbone.Model.extend({
  defaults: {
    email: "",
    password: "",
    role: "",
    data: {
      quotes: 0 
    }
  }
});

var Clients = Backbone.Collection.extend({
  model: Client,
  url: "/api/v1/client"
});
