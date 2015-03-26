/**
 * Created by Yannick on 13/03/2015.
 * Update by Marine on 20/03/2015.
 */
AppArnaga.controller('GameController', function($scope, VarFactory, TextFactory, HomeFactory){
    $scope.texts = TextFactory.getTexts().then(function(texts){
        $scope.texts = texts;
        $scope.titreJeuArnaga = texts.titreJeuArnaga;
        $scope.intro = texts.intro;
        $scope.choixAvatar = texts.choixAvatar;
        $scope.choixCyrano = texts.choixCyrano;
        $scope.choixRoxanne = texts.choixRoxanne;
        $scope.explication = texts.explication;
        $scope.introduction = texts.introduction;
        $scope.profil = texts.profil;
        $scope.retour = texts.retour;
        $scope.suivant = texts.suivant;
        $scope.commencer = texts.commencer;
        $scope.valider = texts.valider;
        $scope.qualiteR = texts.qualiteR;
        $scope.qualiteC = texts.qualiteC;
        $scope.defautR = texts.defautR;
        $scope.defautC = texts.defautC;
        $scope.physiqueR = texts.physiqueR;
        $scope.physiqueC = texts.physiqueC;
        $scope.metier = texts.metier;
        $scope.nomProfil = texts.nomProfil;
        $scope.passerIntro = texts.passerIntro;
        $scope.choixParcours = texts.choixParcours;
        $scope.jardin = texts.jardin;
        $scope.maison = texts.maison;
    }, function(msg){
        alert(msg);
    });

    $scope.setAvatar = function(avatar){
        VarFactory.setVar('avatar', avatar);
        $scope.avatar = VarFactory.getVar(avatar);
    };

    $scope.setPlayerName = function(name){
        VarFactory.setVar('playerName' , name);
        $scope.playerName = VarFactory.getVar(name);
        console.log($scope.playerName);
    }

    $scope.home = HomeFactory.getHome().then(function(home){
        $scope.home = home;
        $scope.question = HomeFactory.getQuestion('exterieur', 0);
        $scope.responses = $scope.question['listeReponses'];
        $scope.win = false;
        $scope.response = 0;
        $scope.$watch('response', function(newValue, oldValue, scope) {
            console.log(newValue);
        });
        console.log($scope.responses);
        console.log($scope.question);

    }, function(msg){
        alert(msg);
    });


});