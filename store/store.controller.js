(function() {
  'use strict';

  angular
    .module('app.store')
    .controller('StoreController', StoreController);

  StoreController.$inject = ['StoreService'];

  /* @ngInject */
  function StoreController(StoreService) {
    var vm = this;
    //vm.products = APP_DATA.gems;
    vm.products = [];

    activate();
    /////////////////

    function activate() {
      getProducts();
    }

    getProducts() {
      return StoreService.query()
      .then(function(data) {
        vm.products = data;
        return vm.products;
      }).catch(function(e) {
        $log.log(e.message || 'something went wrong');
      });
    }



  }

})();
