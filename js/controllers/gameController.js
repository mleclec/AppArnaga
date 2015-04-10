/**
 * Created by Yannick on 13/03/2015.
 * Update by Marine on 20/03/2015.
 */
AppArnaga.controller('GameController', function($scope, VarFactory, HomeFactory, $routeParams, $location, $filter){
    $scope.avatar = VarFactory.getVar('avatar');
    $scope.setAvatar = function(avatar){
        VarFactory.setVar('avatar', avatar);
        $scope.avatar = VarFactory.getVar('avatar');
    };
    /*
    $scope.setPlayerName = function(name){
        VarFactory.setVar('playerName' , name);
        $scope.playerName = VarFactory.getVar(name);
    }
    */

    $scope.location = $location;

    $scope.$watch(function(){ return $scope.location.path(); }, function(newValue, oldValue){
        if ( newValue === oldValue ) {
            $scope.place = $routeParams.place;
            $scope.id = $routeParams.id;

            $scope.nextId = parseInt($scope.id) + 1;

            if ($scope.place!=undefined){
                $scope.home = HomeFactory.getHome().then(function(home){
                    $scope.home = home;
                    $scope.places = HomeFactory.getPlaces();
                    $scope.nbQuestions = HomeFactory.getQuestions($scope.place).length;
                    $scope.question = HomeFactory.getQuestion($scope.place, $scope.id);
                    $scope.responses = $scope.question['listeReponses'];
                    $scope.keyResponses = Object.keys($scope.responses);
                    $scope.win = false;
                    $scope.response = 0;

                    $scope.images = $scope.question['media']['image'];
                    $scope.sons = $scope.question['media']['son'];
                    $scope.nbWinDrop = 0;
                    $scope.handleDrop = function(item, bin) {
                        if ($scope.sons != undefined){
                            $scope.sons[item]['drop'] = true;
                        }
                        if ($scope.images != undefined){
                            $scope.images[item]['drop'] = true;
                        }
                        bin = $filter('limitTo')(bin, -1);
                        if (item == bin){
                            $scope.nbWinDrop++;
                        }
                        if ($scope.nbWinDrop == 3){
                            $scope.win = true;
                        }
                        //alert('Item ' + item + ' has been dropped into ' + $filter('limitTo')(bin, -1));
                    }

                    $scope.nextQuestion = HomeFactory.getQuestion($scope.place, $scope.nextId);
                    if ($scope.nbQuestions == $scope.nextId){
                        HomeFactory.incrNumPlace();
                        $scope.nextPlace = $scope.places[HomeFactory.getNumPlace()];
                        $scope.nextQuestion = HomeFactory.getQuestion($scope.nextPlace, 0);
                    }
                    $scope.test = function(response){
                        $scope.response = response;
                        if ($scope.response == $scope.question['bonneReponse']){
                            $scope.win = true;
                        }
                    }
                }, function(msg){
                    alert(msg);
                });
            }
        }
    });


});