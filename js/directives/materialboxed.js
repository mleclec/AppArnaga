/**
 * Created by Yannick on 12/04/2015.
 */
AppArnaga.directive('materialboxed', function(){
    return {
        restrict: 'C',
        link: function(scope, element, attrs){
            $(element).materialbox();
        }
    }
});
