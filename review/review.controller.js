(function() {
  'use strict';

  angular
    .module('app.review')
    .controller('ReviewController', ReviewController);

  ReviewController.$inject = [];

  /* @ngInject */
  function ReviewController() {
    var vm = this;

    vm.review = {};
    vm.addReview = addReview;

    activate();
    /////////////////

    function activate() {
      // Run init stuff here
    }

    function addReview(product) {
      vm.review.createdOn = Date.now();
      product.reviews.push(vm.review);
      vm.review = {};
    }
  }

})();
