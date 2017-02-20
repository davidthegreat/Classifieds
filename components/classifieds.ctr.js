(function() {

  "use strict";

 angular.module('ngClassifieds').controller("classifiedsCtrl", function($scope, $http, classfiedsFactory, $mdSidenav, $mdToast) {
  classfiedsFactory.getClassifieds().then(function(classifieds){

     $scope.classifieds = classifieds.data
    // console.log(data)
   })

   var contact = {
     name: "David Ramirez",
     phone: "(209) 123-4567",
     email: "david@cool.com"

   }

   $scope.openSidebar = function() {
     $mdSidenav('left').open();
   }

   $scope.closeSidebar = function() {
     $mdSidenav('left').close();
   }

   $scope.saveClassified = function(classified) {
     if(classified){
       classified.contact = contact;
       $scope.classifieds.push(classified);
       $scope.classified = {};
       $scope.closeSidebar();
       $mdToast.show(
         $mdToast.simple()
          .content("Classified Saved!")
          .position('top, right')
          .hideDelay(3000)
       );
     }
   }

 });
})();
