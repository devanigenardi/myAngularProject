 var app = angular.module('myApp', ['ngRoute']);
       
       app.controller('MainCtrl', function($scope){
           
           
           var quiz = [{q:'are you ready', a: 'i am ready'}];
           $scope.quiz = quiz;
           
           $scope.addItem = function(question, answer){
               $scope.quiz.push({q:$scope.formQuestion, a:$scope.formAnswer})
           }
           
       });
       
       app.config(['$routeProvider', function($routeProvider){
           
           
           $routeProvider.when('/', {templateUrl:'views/questions.html', controller:'MainCtrl'});
           $routeProvider.when('/views/play', {templateUrl:'views/play.html', controller:'MainCtrl'});
           $routeProvider.when('/views/terms', {templateUrl:'views/terms.html', controller:'MainCtrl'});
           $routeProvider.when('/views/quiz', {templateUrl:'views/list.html', controller:'MainCtrl'});
           $routeProvider.otherwise({redirectTo:'/'});
           
       }])