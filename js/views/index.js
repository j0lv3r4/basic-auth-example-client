var IndexView = Backbone.View.extend({
  el: '.app',
  initialize: function () {
   this.render(); 
  },

  render: function () {
    this.$el.html(Templates.index());

    return this;
  }
});
