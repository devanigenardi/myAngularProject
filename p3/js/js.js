 var app = angular.module('myApp', ['ngRoute']);
       
       app.controller('MainCtrl', function($scope){
           var abc = "hello";
           $scope.abc = abc;
           
           var mainTitle = "Insert here yor name";
           $scope.mainTitle = mainTitle;
           
           var quiz = [
                {name:'John', age:25, gender:'boy'},
                {name:'Jessie', age:30, gender:'girl'},
                {name:'Johanna', age:28, gender:'girl'},
                {name:'Joy', age:15, gender:'girl'},
                {name:'Mary', age:28, gender:'girl'},
                {name:'Peter', age:95, gender:'boy'},
                {name:'Sebastian', age:50, gender:'boy'},
                {name:'Erika', age:27, gender:'girl'},
                {name:'Patrick', age:40, gender:'boy'},
                {name:'Samantha', age:60, gender:'girl'}
              ];
           $scope.quiz = quiz;
           
       });
       
       app.config(['$routeProvider', function($routeProvider){
           
           
           $routeProvider.when('/', {templateUrl:'views/questions.html', controller:'MainCtrl'});
           $routeProvider.when('/views/play', {templateUrl:'views/play.html', controller:'MainCtrl'});
           $routeProvider.when('/views/terms', {templateUrl:'views/terms.html', controller:'MainCtrl'});
           $routeProvider.when('/views/quiz', {templateUrl:'views/list.html', controller:'MainCtrl'});
           $routeProvider.otherwise({redirectTo:'/'});
           
       }])