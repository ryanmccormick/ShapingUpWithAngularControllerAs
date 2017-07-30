(function() {
  'use strict';

  angular
    .module('app.gallery')
    .controller('GalleryController', GalleryController);

  GalleryController.$inject = ['$log'];

  /* @ngInject */
  function GalleryController($log) {
    var vm = this;
    vm.imageIndex = 0;
    vm.currentImageChange = currentImageChange;

    activate();
    /////////////////

    function activate() {
      // Run init stuff here
    }

    function currentImageChange(imageNumber) {
      $log.log(imageNumber);
      vm.imageIndex = imageNumber || 0;
    }

  }

})();
