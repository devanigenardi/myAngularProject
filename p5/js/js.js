 var app = angular.module('myApp', ['ngRoute']);
       
       app.controller('MainCtrl', function($scope){
           
           
           var quiz = [{q:'are you ready', a: 'i am ready'}];
           $scope.quiz = quiz;
           
           $scope.total = function(){
              return $scope.quiz.length;
           }
           
           $scope.addItem = function(question, answer){
               if(question && answer){
                   $scope.quiz.push({q:$scope.formQuestion, a:$scope.formAnswer});
                   $scope.formQuestion = '';
                   $scope.formAnswer = '';
               }
           }
           
           $scope.removeLast = function(){
               $scope.quiz.pop();
           }
           
           $scope.clearList = function(){
               $scope.quiz = [];
           }
           
       });
       
       app.config(['$routeProvider', function($routeProvider){
           
           
           $routeProvider.when('/', {templateUrl:'views/questions.html', controller:'MainCtrl'});
           $routeProvider.when('/views/play', {templateUrl:'views/play.html', controller:'MainCtrl'});
           $routeProvider.when('/views/terms', {templateUrl:'views/terms.html', controller:'MainCtrl'});
           $routeProvider.when('/views/quiz', {templateUrl:'views/list.html', controller:'MainCtrl'});
           $routeProvider.otherwise({redirectTo:'/'});
           
       }])