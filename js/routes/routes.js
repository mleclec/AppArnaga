/**
 * Created by Yannick on 12/03/2015.
 */
AppArnaga.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {templateUrl: 'views/commencer.html', controller: 'GameController'})
        .when('/choixAvatar', {templateUrl: 'views/choixAvatar.html', controller: 'GameController'})
        .when('/profil', {templateUrl: 'views/profil.html', controller: 'GameController'})
        .when('/testAnimation', {templateUrl: 'views/testAnimation.html', controller: 'GameController'})
        .when('/choixCyrano', {templateUrl: 'views/choixCyrano.html', controller: 'GameController'})
        .when('/choixRoxanne', {templateUrl: 'views/choixRoxanne.html', controller: 'GameController'})
        .when('/explicationJeu', {templateUrl: 'views/explicationJeu.html', controller: 'GameController'})
        .when('/choixParcours', {templateUrl: 'views/choixParcours.html', controller: 'GameController'})
        .when('/maison/:place/:id',
        {templateUrl: function(param){
            if (param.place=="exterieur"){
                return 'views/questionChoixMultiple.html';
            }else{
                if (param.place == 'rez-de-chaussee'){
                    if (param.id != 0 && param.id != 1 && param.id != 5 && param.id != 7){
                        return 'views/questionChoixMultiple.html';
                    }else{
                        if (param.id == 0 || param.id==5){
                            return 'views/questionCorrespondance.html';
                        }else{
                            return 'views/questionFlash.html';
                        }
                    }
                }
            }
        }, controller: 'GameController'})
        .otherwise({redirectTo: '/'});
}]);