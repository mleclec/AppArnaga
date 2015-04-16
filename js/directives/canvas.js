/**
 * Created by Yannick on 12/04/2015.
 */
AppArnaga.directive('ngCanvas', function(){
    return {
        restrict: 'A',
        scope: false,
        link: function(scope, element, attrs){
            <!-- ********* Initialisation du canvas ********* -->
            var canvas = $(element);

            // Taille du canvas
            canvas.attr('width', '903');
            canvas.attr('height', '508');

            // On recalcul la taille du canvas à chaque redimensionnement de la fenêtre
            $('window').resize(function(){
                var width = $('img').attr('width');
                var height = $('img').attr('height');
                canvas.attr('width', '903');
                canvas.attr('height', '508');
            });

            // On cache le canvas derrière l'image
            canvas.css('position', 'absolute');
            canvas.css('z-index', 1);
            $('img').css('position', 'relative');
            $('img').css('z-index', '2');

        },
        controller: function($scope){
            <!-- ********* Gestion du clic sur un élément de l'image ********* -->

            // coordsClicked est un tableau contenant les éléments qui ont été cliqués
            var coordsClicked = new Array();
            $scope.onClick = function(nbCoordsElements, $event){
                var canvas = angular.element('canvas');
                var coords = $event.currentTarget.attributes['coords'].nodeValue;
                var found = false;

                // found = true si l'élément cliqué est déjà présent dans coordsClicked
                for (var i=0; i<coordsClicked.length; i++){
                    if (coordsClicked[i] == coords){
                        found = true;
                    }
                }

                if (!found){
                    coordsClicked.push(coords);
                    $scope.nbClick++;
                    var tabAllCoords = new Array();
                    // tabCoords contient les coordonnées de l'élément cliqué
                    var tabCoords = String(coords).split(',');
                    var nbCoords = (coords.match(/,/g) || []).length+1;
                    var nbX = 0;
                    var nbY = 1;
                    // cette étape permet de créer le bon tableau de coordonnées à donner au plugin jCanvas
                    for (var i=0; i<nbCoords/2; i++){
                        var array = new Array();
                        array.push(tabCoords[nbX], tabCoords[nbY]);
                        tabAllCoords.push(array);
                        nbX = nbX + 2;
                        nbY = nbY + 2;
                    }
                    // obj sera l'objet dessiné
                    var obj = {
                        strokeStyle: '#000',
                        strokeWidth: 6,
                        rounded: true,
                        closed: true
                    };

                    // on donne à jCanvas notre tableau de coordonnées
                    var pts = tabAllCoords;

                    // on donne les coordonnées à la variable obj
                    for (var p=0; p<pts.length; p+=1) {
                        obj['x'+(p+1)] = pts[p][0];
                        obj['y'+(p+1)] = pts[p][1];
                    }

                    // On dessine les lignes du polygone
                    canvas.drawLine(obj);

                    // Si on a cliqué sur tous les éléments de l'image, on affiche le canvas au dessus de l'image
                    if ($scope.nbClick==nbCoordsElements){
                        canvas.css('z-index', '3');
                        $scope.win = true;
                    }
                }
            }
        }
    }
});

