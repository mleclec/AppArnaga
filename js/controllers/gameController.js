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

    $scope.parcours = VarFactory.getVar('parcours');
    $scope.setParcours = function(parcours){
        VarFactory.setVar('parcours', parcours);
        $scope.parcours = VarFactory.getVar('parcours');
    };

    $scope.location = $location;
    $scope.url = $scope.location.path();
    $scope.nbClick = 0;

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
                    if ($scope.question['type'] != 'Clique'){
                        $scope.responses = $scope.question['listeReponses'];
                        $scope.keyResponses = Object.keys($scope.responses);
                        $scope.nbResponses = $scope.keyResponses.length;
                    }

                    $scope.coords = $scope.question["coords"];
                    if ($scope.coords!=undefined){
                        $scope.nbCoords = Object.keys($scope.coords).length;
                    }

                    console.log($scope.coords);
                    $scope.viewResponse = false;
                    $scope.win = false;
                    $scope.response = 0;

                    $scope.images = $scope.question['media']['image'];
                    $scope.sons = $scope.question['media']['son'];
                    $scope.imageReponse = $scope.question['imageReponse'];
                    $scope.nbWinDrop = 0;
                    $scope.dropCode = "";
                    $scope.dragCode = "";
                    $scope.$watch(function(){ return $scope.codeDrop; }, function(newValue, oldValue) {
                        if (newValue === oldValue) {
                            console.log($scope.dropCode);
                        }
                    });

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
                        if ($scope.nbWinDrop == $scope.nbResponses){
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

                    $scope.timerStop = false;
                    $scope.$on('timer-stopped', function (event, data){
                        $scope.timerStop = true;
                        $scope.$apply();
                    });

                    $scope.stopTimer = function (){
                        $scope.$broadcast('timer-stop');
                    };


                    $scope.test = function(response){
                        $scope.response = response;
                        if ($scope.response == $scope.question['bonneReponse']){
                            $scope.win = true;
                            $scope.stopTimer();
                        }
                    }
                }, function(msg){
                    alert(msg);
                });
            }
        }
    });


});