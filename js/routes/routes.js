/**
 * Created by Yannick on 12/03/2015.
 * Update on April 2015
 */
AppArnaga.config(['$routeProvider', 'HomeFactoryProvider', function($routeProvider){
    $routeProvider
        .when('/', {templateUrl: 'views/commencer.html'})
        .when('/choixAvatar', {templateUrl: 'views/choixAvatar.html', controller: 'GameController'})
        .when('/profil', {templateUrl: 'views/profil.html', controller: 'GameController'})
        .when('/testAnimation', {templateUrl: 'views/testAnimation.html', controller: 'GameController'})
        .when('/choixCyrano', {templateUrl: 'views/choixCyrano.html', controller: 'GameController'})
        .when('/choixRoxane', {templateUrl: 'views/choixRoxane.html', controller: 'GameController'})
        .when('/explicationJeu', {templateUrl: 'views/explicationJeu.html', controller: 'GameController'})
        .when('/introduction', {templateUrl: 'views/introduction.html', controller: 'GameController'})
        .when('/choixParcours', {templateUrl: 'views/choixParcours.html', controller: 'GameController'})
        .when('/:type/:lieu/:place/:id',
        {templateUrl: function(param){
            var type = param.type;
            switch (type){
                case 'Choix multiple':
                    return 'views/questionChoixMultiple.html';
                    break;
                case 'Correspondance':
                    return 'views/questionCorrespondance.html';
                    break;
                case 'CorrespondanceImage':
                    return 'views/questionCorrespondanceImage.html';
                    break;
                case 'Flash':
                    return 'views/questionFlash.html';
                    break;
                case 'Clique':
                    return 'views/questionClique.html';
                    break;
                case 'Puzzle':
                    return 'views/questionPuzzle.html';
                    break;
            }
        }, controller: 'GameController'})
        .otherwise({redirectTo: '/'});
}]);