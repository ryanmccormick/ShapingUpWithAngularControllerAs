(function() {
  'use strict';

  angular
    .module('app.store')
    .controller('StoreController', StoreController);

  StoreController.$inject = ['APP_DATA'];

  /* @ngInject */
  function StoreController(APP_DATA) {
    var vm = this;
    vm.products = APP_DATA.gems;

    activate();
    /////////////////

    function activate() {
      // Run init stuff here
    }

  }

})();
