/**
 * Created by Yannick on 13/03/2015.
 */
AppArnaga.controller('TextController', function($scope, TextFactory){
    $scope.texts = TextFactory.getTexts().then(function(texts){
        $scope.texts = texts;
    }, function(msg){
        alert(msg);
    });

    $scope.text = TextFactory.getText('intro').then(function(text){
        $scope.text = text;
    }, function(msg){
        alert(msg);
    });
    //console.log($scope.texts);
});