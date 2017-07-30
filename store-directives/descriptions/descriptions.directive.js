(function() {
  'use strict';

  angular
    .module('store-directives')
    .directive('descriptions', descriptions);

  function descriptions() {
    var directive = {
      restrict: 'E',
      templateUrl: 'store-directives/descriptions/descriptions.tpl.html'
    };

    return directive;
    /////////////////

  }

})();
