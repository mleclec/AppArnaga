/**
 * Created by Yannick on 12/04/2015.
 */
AppArnaga.directive('materialboxed', function(){
    return {
        restrict: 'C',
        link: function(scope, element, attrs){
            <!-- ********* Initialisation de la lightbox materialdu framework css ********* -->
            $(element).materialbox();
        }
    }
});
