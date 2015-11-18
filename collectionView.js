//Collection View for MovieCollection
var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$ = $;
var ListingView = require('./modelView');
var MovieListing = require('./model')

module.exports = Backbone.View.extend({
  el: $('section'),
  initialize: function() {
    console.log('collection view is initialized');
    this.addAllListings();
  },
  events: {
    'submit #createMovie': 'createListing',
    'click #submitEdit': 'editCollection'
  },
  createListing: function(e) {
    e.preventDefault();
    var newListing = {
      title:$('#createMovie').find('input[name="newTitle"]').val(),
      director:$('#createMovie').find('input[name="newDirector"]').val(),
      synopsis:$('#createMovie').find('textarea[name="newSynopsis"]').val(),
      poster:$('#createMovie').find('input[name="newPoster"]').val()
    };
    var movieListing = new MovieListing(newListing);
    movieListing.save();
    console.log(this.collection.length);
    this.collection.add(movieListing);
    console.log(this.collection.length);
    this.addOneListing(movieListing);
    $('input').val('');
    $('textarea').val('');

  },

  editCollection: function() {
    this.$el.find('article').remove();
    this.addAllListings();
    console.log('collection back');
  },

  addOneListing: function(movie) {
    var listingView = new ListingView({model: movie});
    this.$el.append(listingView.render().el);
  },

  addAllListings: function() {
    _.each(this.collection.models, this.addOneListing, this)
  }
});
