(function() {
  'use strict';

  angular
    .module('store-directives')
    .directive('productTabs', productTabs);

  function productTabs() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/store-directives/product-tabs/product-tabs.tpl.html',
      controller: ProductTabController,
      controllerAs: 'tab'
    };

    return directive;
    /////////////////
  }

  ProductTabController.$inject = [];

  /* @ngInject */
  function ProductTabController() {
    var vm = this;
    vm.tab = 1;
    vm.isSet = isSet;
    vm.setTab = setTab;

    function isSet(checkTab) {
      return vm.tab === checkTab;
    }

    function setTab(activeTab) {
      vm.tab = activeTab;
    }
  }

})();
