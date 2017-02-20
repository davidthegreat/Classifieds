(function() {

  "use strict";

 angular.module('ngClassifieds').controller("classifiedsCtrl", function($scope, $http, classfiedsFactory, $mdSidenav) {
  classfiedsFactory.getClassifieds().then(function(classifieds){

     $scope.classifieds = classifieds.data
    // console.log(data)
   })

   $scope.openSidebar = function() {
     $mdSidenav('left').open();
   }

   $scope.closeSidebar = function() {
     $mdSidenav('left').close();
   }

 });
})();
