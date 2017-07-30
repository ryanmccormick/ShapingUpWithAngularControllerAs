(function() {
  'use strict';

  angular
    .module('store-directives')
    .directive('specs', specs);

  function specs() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/store-directives/specs/specs.tpl.html'
    };

    return directive;
    /////////////////

  }

})();
