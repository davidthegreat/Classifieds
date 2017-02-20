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
       showToast("Edit saved!");
   }
 }

   $scope.editClassified = function(classified){
     $scope.editing = true;
     $scope.openSidebar();
     $scope.classified = classified;
   }

   $scope.saveEdit = function(){
     $scope.editing = false;
     $scope.classified = {};
     $scope.closeSidebar();
     showToast("classified saved!");
   }

   function showToast(message){
     $mdToast.show(
       $mdToast.simple()
        .content(message)
        .position('top, right')
        .hideDelay(3000)
     );
   }


 });
})();
