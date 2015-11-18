//Movie Listing
var Backbone = require('backbone');
var _ = require('underscore');

module.exports = Backbone.Model.extend({
  urlRoot: 'http://tiny-tiny.herokuapp.com/collections/LindsayWilliamsMovies',
  idAttribute: "_id",
  defaults: function() {
    return {
      title: "Movie Title",
      director: "director",
      synopsis: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      poster: 'http://fillmurray.com/300/300'
    };
  },
  initialize: function() {
    console.log('model was created');
  }
});
