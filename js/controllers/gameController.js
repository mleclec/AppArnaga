/**
 * Created by Yannick on 13/03/2015.
 * Update by Marine on 20/03/2015.
 */
AppArnaga.controller('GameController', function($scope, VarFactory, HomeFactory, $routeParams, $location){
    <!-- ********* Affectation de l'avatar ********* -->
    $scope.avatar = VarFactory.getVar('avatar');
    $scope.setAvatar = function(avatar){
        VarFactory.setVar('avatar', avatar);
        $scope.avatar = VarFactory.getVar('avatar');
    };

    <!-- ********* Initialisations de variables au début du jeu ********* -->

    // récupération de l'URL
    $scope.location = $location;
    $scope.url = $scope.location.path();

    // nbClick servira à compter le nombre de clic dans les question de type Clique
    // on se sert de cette variable dans la directive pour le canvas : canvas.js
    $scope.nbClick = 0;

    <!-- ********* Block exécuté lors du changement de l'URL ********* -->
    $scope.$watch(function(){ return $scope.location.path(); }, function(newValue, oldValue){
        if ( newValue === oldValue ) {

            // on récupère les paramètres de l'URL
            $scope.place = $routeParams.place;
            $scope.id = $routeParams.id;
            // on calcul l'id de la prochaine question
            $scope.nextId = parseInt($scope.id) + 1;

            <!-- ********* Block exécuté lors de l'affichage des questions ********* -->
            if ($scope.place!=undefined){
                $scope.home = HomeFactory.getHome().then(function(home){

                    // récupération de parcoursMaison.json
                    $scope.home = home;

                    // récupération des différents lieux à visités
                    $scope.places = HomeFactory.getPlaces();
                    // récupération du nombre de questions du lieu
                    $scope.nbQuestions = HomeFactory.getQuestions($scope.place).length;
                    // récupération des données de la question en cours
                    $scope.question = HomeFactory.getQuestion($scope.place, $scope.id);

                    <!-- ********* Initialisation de variables communes à toutes les questions ********* -->
                    $scope.win = false;
                    $scope.response = 0;
                    $scope.imageReponse = $scope.question['imageReponse'];

                    <!-- ********* Selon le type de la question, on initialise des variables et des fonctions ********* -->
                    switch ($scope.question['type']){
                        case 'Choix multiple':
                            $scope.responses = $scope.question['listeReponses'];
                            $scope.keyResponses = Object.keys($scope.responses);
                            $scope.nbResponses = $scope.keyResponses.length;
                            break;
                        case 'Flash':
                            $scope.responses = $scope.question['listeReponses'];
                            $scope.keyResponses = Object.keys($scope.responses);
                            $scope.nbResponses = $scope.keyResponses.length;
                            $scope.viewResponse = false;
                            $scope.timerStop = false;
                            $scope.$on('timer-stopped', function (event, data){
                                $scope.timerStop = true;
                                $scope.$apply();
                            });

                            $scope.stopTimer = function (){
                                $scope.$broadcast('timer-stop');
                            };
                            break;
                        case 'Correspondance':
                            $scope.responses = $scope.question['listeReponses'];
                            $scope.keyResponses = Object.keys($scope.responses);
                            $scope.nbResponses = $scope.keyResponses.length;
                            $scope.images = $scope.question['media']['image'];
                            $scope.nbWinDrop = 0;
                            $scope.dropCode = "";
                            $scope.dragCode = "";
                            break;
                        case 'CorrespondanceImage':
                            $scope.responses = $scope.question['listeReponses'];
                            $scope.keyResponses = Object.keys($scope.responses);
                            $scope.nbResponses = $scope.keyResponses.length;
                            $scope.images = $scope.question['media']['image'];
                            $scope.sons = $scope.question['media']['son'];
                            $scope.nbWinDrop = 0;
                            $scope.dropCode = "";
                            $scope.dragCode = "";
                            break;
                        case 'Clique':
                            $scope.images = $scope.question['media']['image'];
                            $scope.coords = $scope.question["coords"];
                            if ($scope.coords!=undefined){
                                $scope.nbCoords = Object.keys($scope.coords).length;
                            }
                            break;
                        case 'Puzzle':
                            break;
                    }

                    <!-- ********* On récupère la prochaine question du lieu, ou on passe au lieu suivant ********* -->
                    $scope.nextQuestion = HomeFactory.getQuestion($scope.place, $scope.nextId);
                    if ($scope.nbQuestions == $scope.nextId){
                        HomeFactory.incrNumPlace();
                        $scope.nextPlace = $scope.places[HomeFactory.getNumPlace()];
                        $scope.nextQuestion = HomeFactory.getQuestion($scope.nextPlace, 0);
                    }

                    <!-- ********* On vérifie que la réponse donnée est la bonne ********* -->
                    $scope.test = function(response){
                        $scope.response = response;
                        if ($scope.response == $scope.question['bonneReponse']){
                            $scope.win = true;
                            if ($scope.question['type']=='Flash'){
                                $scope.stopTimer();
                            }
                        }
                    }
                }, function(msg){
                    alert(msg);
                });

            }
        }
    });
});