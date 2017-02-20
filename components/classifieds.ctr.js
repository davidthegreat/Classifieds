(function() {

  "use strict";

 angular.module('ngClassifieds').controller("classifiedsCtrl", function($scope, $http, classfiedsFactory) {
  classfiedsFactory.getClassifieds().then(function(classifieds){

     $scope.classifieds = classifieds.data
    // console.log(data)
   })

 });
})();
