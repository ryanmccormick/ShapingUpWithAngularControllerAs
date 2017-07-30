(function() {
  'use strict';

  angular
    .module('store-directives')
    .directive('reviews', reviews);

  function reviews() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/store-directives/reviews/reviews.tpl.html'
    };

    return directive;
    /////////////////

  }

})();
