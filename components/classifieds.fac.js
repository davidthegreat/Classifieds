(function() {

    "use strict"

    angular
      .module("ngClassifieds")
      .factory("classfiedsFactory", function($http) {

        function getClassifieds(){
          return $http.get('data/classfieds.json')
        }
        
        return {
          getClassifieds: getClassifieds
        }

      });

})();
