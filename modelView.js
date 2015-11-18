//Model View for MovieListing
var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$ = $;
var MovieListing = require('./model')
var ListingView = require('./modelView');

module.exports = Backbone.View.extend({
  template: _.template($('#postTmpl').html()),
  tagName: 'article',
  className: 'col-md-4',
  initialize: function () {
    console.log(this.el);
  },
  events: {
    "click #deletePost": "removeListing",
    'click #editPost': 'showEdit',
    'click #submitEdit': 'editListing'
  },

  showEdit: function() {
    this.$el.find('#editPost').hide();
    this.$el.find('#submitEdit').addClass('show');
    this.$el.find('#updatePost').addClass('show');
    this.$el.find('.content').hide();
  },
  render: function() {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);

    return this;
  },
  removeListing: function() {
    this.model.destroy();
    this.$el.remove();
  },
  editListing: function(e) {
    e.preventDefault();
    this.model.set({
      title: this.$el.find('input[name="editTitle"]').val(),
      director: this.$el.find('input[name="editDirector"]').val(),
      synopsis: this.$el.find('textarea[name="editSynopsis"]').val(),
      poster: this.$el.find('input[name="editPoster"]').val()
    })

    this.model.save();

    $('.content').show();
    $('#editPost').show();
    $('#updatePost').removeClass('show');
    $('#submitEdit').removeClass('show');
    console.log('submit edit button clicked');

  }
});
