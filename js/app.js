// app.js
// create angular app
var validationApp = angular.module('validationApp', []);

// create angular controller
validationApp.controller('mainController', function($scope) {

  // function to submit the form after all validation has occurred            
  $scope.submitForm = function(isValid,register) {
    // check to make sure the form is completely valid
    if (!isValid) {
      alert('Please fill all require form !');
    }
//    if(register.psw != register.pswcheck){
//        $scope.checkPasswordValidation = false;
//    }else{
//         $scope.checkPasswordValidation = true;
//    }
  };
 $scope.checkPassword = function(register){
     if(register.psw != register.pswcheck){
        $scope.checkPasswordValidation = false;
    }else{
         $scope.checkPasswordValidation = true;
    }
 }

});
