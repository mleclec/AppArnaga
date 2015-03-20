/**
 * Created by Yannick on 13/03/2015.
 * Update by Marine on 20/03/2015.
 */
AppArnaga.controller('TextController', function($scope, TextFactory){
    $scope.texts = TextFactory.getTexts().then(function(texts){
        $scope.texts = texts;
        $scope.titreJeuArnaga = texts.titreJeuArnaga;
        $scope.intro = texts.intro;
        $scope.choixAvatar = texts.choixAvatar;
        $scope.choixCyrano = texts.choixCyrano;
        $scope.choixRoxane = texts.choixRoxane;
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
    }, function(msg){
        alert(msg);
    });
});