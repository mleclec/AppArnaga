/**
 * Created by Yannick on 12/04/2015.
 */
AppArnaga.directive('ngMap', function(){
    return {
        restrict: 'A',
        link: function(scope, element, attrs){
            $(element).rwdImageMaps();
        }
    }
});
