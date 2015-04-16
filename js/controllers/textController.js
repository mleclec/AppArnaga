/**
 * Created by Yannick on 03/04/2015.
 */
/**
 * Created by Yannick on 13/03/2015.
 * Update by Marine on 15/04/2015.
 */
AppArnaga.controller('TextController', function($scope, TextFactory){
    $scope.texts = TextFactory.getTexts().then(function(texts){
        <!-- ********* Récupération des textes généraux du fichier textesGeneraux.json ********* -->
        $scope.texts = texts;
        $scope.titreJeuArnaga = texts.titreJeuArnaga;
        $scope.intro = texts.intro;
        $scope.commencer = texts.commencer;
        $scope.choixAvatar = texts.choixAvatar;
        $scope.choixCyrano = texts.choixCyrano;
        $scope.choixRoxane = texts.choixRoxane;
        $scope.retour = texts.retour;
        $scope.suivant = texts.suivant;
        $scope.qualiteR = texts.qualiteR;
        $scope.qualiteC = texts.qualiteC;
        $scope.defautR = texts.defautR;
        $scope.defautC = texts.defautC;
        $scope.physiqueR = texts.physiqueR;
        $scope.physiqueC = texts.physiqueC;
        $scope.metier = texts.metier;
        $scope.explication = texts.explication;
        $scope.passerExplication = texts.passerExplication;
        $scope.introduction = texts.introduction;
        $scope.passerIntro = texts.passerIntro;
        $scope.valider = texts.valider;
        $scope.choixParcours = texts.choixParcours;
        $scope.jardin = texts.jardin;
        $scope.maison = texts.maison;
        $scope.qSuivante = texts.qSuivante;
        $scope.bravo = texts.bravo;
        $scope.voirReponse = texts.voirReponse;
        $scope.tps = texts.tps;
        $scope.pbmNav = texts.pbmNav;
        $scope.qFin = texts.qFin;
    }, function(msg){
        alert(msg);
    });
});
