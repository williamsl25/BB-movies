var $ = require('jquery');
var CollectionView = require('./collectionView');
var MovieCollection =require('./collection')

$(document).ready(function() {
  var movieCollection = new MovieCollection();
  movieCollection.fetch().then(function (data) {
    console.log("these are the movies: ", movieCollection
  );
    var collectionView = new CollectionView({collection: movieCollection});
  });
});
