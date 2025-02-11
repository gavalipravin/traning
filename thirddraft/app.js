//1.define Angular.js Modules

var app=angular.module("transflower",[]);
app.controller("LoginController",function($scope){

    //define model
    $scope.user={
        email:"pravin.gavali@gmail.com",
        password:"Pravin@2001"
    }
   $scope.onValidate=function(){
        {
            console.log("Welcome");
        }
        {
            console.log("Invalid User");
        }
    }
});