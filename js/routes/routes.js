/**
 * Created by Yannick on 12/03/2015.
 */
AppArnaga.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {templateUrl: 'views/commencer.html'})
        .when('/choixAvatar', {templateUrl: 'views/choixAvatar.html'})
        .when('/profil', {templateUrl: 'views/profil.html'})
        .when('/testAnimation', {templateUrl: 'views/testAnimation.html'})
        .when('/choixCyrano', {templateUrl: 'views/choixCyrano.html'})
        .when('/choixRoxanne', {templateUrl: 'views/choixRoxanne.html'})
        .when('/explicationJeu', {templateUrl: 'views/explicationJeu.html'})
        .otherwise({redirectTo: '/'});
}]);