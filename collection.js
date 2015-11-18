//Movie Collection
var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var MovieListing = require('./model')

module.exports = Backbone.Collection.extend({
  url: 'http://tiny-tiny.herokuapp.com/collections/LindsayWilliamsMovies',
  model: MovieListing,
  initialize: function () {
   }
});
