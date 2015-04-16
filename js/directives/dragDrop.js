/**
 * Created by Yannick on 13/04/2015.
 */
AppArnaga.directive('ngDrag', function(){
    return {
        restrict: 'A',
        link: function(scope, element, attrs){
            <!-- ********* Notre élément est draggable ********* -->
            $(element).draggable({
                snap: '.snap', // magnétisme avec la zone de drop
                revert: 'invalid' // retour à la position initiale si l'élément n'est pas déposé dans la zone de drop
            });
        }
    }
});

AppArnaga.directive('ngDrop', function($filter){
    return {
        restrict: 'A',
        link: function(scope, element, attrs){
            <!-- ********* Notre élément est droppable ********* -->
            $(element).droppable({
                // Fonction exécuter lors du drop
                drop : function(event, ui){
                    // On récupère les id de l'élément draggué et celui de l'élément droppé
                    scope.$parent.dropCode = $filter('limitTo')(attrs['id'], -1);
                    scope.$parent.dragCode = ui.draggable.attr('id');

                    // le son et l'image que l'on a manipuler voient leur propriété drop passer à true
                    // on se sert de cette propriété pour définir des classes à ces éléments
                    // voir dans les fichiers questionCorrespondance.html et questionCorrespondanceImage.html l'attribut ng-classe
                    if (scope.$parent.sons != undefined){
                        scope.$parent.sons[scope.$parent.dropCode]['drop'] = true;
                    }
                    if (scope.$parent.images != undefined){
                        scope.$parent.images[scope.$parent.dropCode]['drop'] = true;
                    }

                    // Si les id concordent on a donné la bonne réponse
                    if (scope.$parent.dropCode == scope.$parent.dragCode){
                        scope.$parent.nbWinDrop++;
                    }

                    // Si on a bien fait correspondre chacun des éléments, on a gagné
                    if (scope.$parent.nbWinDrop == scope.$parent.nbResponses){
                        scope.$parent.win = true;
                    }

                    // On supprime l'élément draggué pour le mettre dans la zone de drop
                    var dropped = ui.draggable;
                    ui.draggable.detach();
                    dropped.css('position', 'static').css('width', '100%').appendTo($('#'+attrs['id']));
                    scope.$apply();
                }
            });
        }
    }
});