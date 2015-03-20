/**
 * Created by Yannick on 13/03/2015.
 */
AppArnaga.controller('TextController', function($scope, TextFactory){
    $scope.texts = TextFactory.getTexts().then(function(texts){
        $scope.texts = texts;
        $scope.titreJeuArnaga = texts.titreJeuArnaga;
        $scope.intro = texts.intro;
        $scope.choixAvatar = texts.choixAvatar;
        $scope.choixCyrano = texts.choixCyrano;
        $scope.choixRoxane = texts.choixRoxane;
        $scope.retour = texts.retour;
        $scope.suivant = texts.suivant;
        $scope.commencer = texts.commencer;
    }, function(msg){
        alert(msg);
    });
});