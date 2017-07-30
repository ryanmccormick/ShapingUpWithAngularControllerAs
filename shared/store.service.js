(function() {
  'use strict';

  angular
    .module('app.shared')
    .factory('StoreService', StoreService);

  StoreService.$inject = ['$log', '$q', 'APP_DATA']

  /* @ngInject */
  function StoreService($log, $q, APP_DATA) {
    var service = {
      query: query
    };

    return service;
    /////////////////

    function query() {
      var deferred = $q.defer();

      if(APP_DATA.gems.length) {
        return $q.resolve(APP_DATA.gems);
      } else {
        return $q.reject({ message: 'Something Happened'});
      }
    }

  }

})();
