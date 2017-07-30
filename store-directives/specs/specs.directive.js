(function() {
  'use strict';

  angular
    .module('store-directives')
    .directive('specs', specs);

  function specs() {
    var directive = {
      restrict: 'E',
      templateUrl: 'store-directives/specs/specs.tpl.html'
    };

    return directive;
    /////////////////

  }

})();
