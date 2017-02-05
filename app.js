var app = angular.module("holdemSteps", ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  
  // For any unmatched url, redirect to /startPage
  $urlRouterProvider.otherwise("/startPage");
  
  // set up the states
  $stateProvider
    .state('easyGame', {
      url: "/easyGame",
      templateUrl: "components/easyGame/easyGame.html",
      controller: 'gameCtrl'
    })
    .state('startPage', {
      url: "/startPage",
      templateUrl: "components/startPage/startPage.html"
    });
}]);


var myDataRef = new Firebase('https://holdemsteps.firebaseio.com/');
myDataRef.set('User');

var cardsFolder = function() {
  if(window.screen.availWidth >= 1000) {
    return 'mediumCards';
  }
  else {
    return 'smallCards';
  }
}();