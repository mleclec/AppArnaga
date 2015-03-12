/**
 * Created by Yannick on 12/03/2015.
 */
AppArnaga.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {templateUrl: 'views/commencer.html'})
        .when('/choixAvatar', {templateUrl: 'views/choixAvatar.html'})
        .when('/profil', {templateurl: 'views/profil.html'})
        .otherwise({redirectTo: '/'});
}]);