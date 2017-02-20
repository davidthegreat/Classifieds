(function() {

  "use strict";

 angular.module('ngClassifieds').controller("classifiedsCtrl", function($scope, $http) {
   $http.get('data/classfieds.json').then(function(classifieds){

     $scope.classifieds = classifieds.data
    // console.log(data)
   })

 });
})();
