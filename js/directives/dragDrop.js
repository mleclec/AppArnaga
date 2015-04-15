/**
 * Created by Yannick on 13/04/2015.
 */
AppArnaga.directive('ngDrag', function(){
    return {
        restrict: 'A',
        link: function(scope, element, attrs){
            $(element).draggable({
                snap: '.snap',
                revert: 'invalid'
            });
        }
    }
});

AppArnaga.directive('ngDrop', function($filter){
    return {
        restrict: 'A',
        link: function(scope, element, attrs){
            $(element).droppable({
                drop : function(event, ui){
                    scope.$parent.dropCode = $filter('limitTo')(attrs['id'], -1);
                    scope.$parent.dragCode = ui.draggable.attr('id');
                    if (scope.$parent.sons != undefined){
                        scope.$parent.sons[scope.$parent.dropCode]['drop'] = true;
                    }
                    if (scope.$parent.images != undefined){
                        scope.$parent.images[scope.$parent.dropCode]['drop'] = true;
                    }
                    if (scope.$parent.dropCode == scope.$parent.dragCode){
                        scope.$parent.nbWinDrop++;
                    }
                    if (scope.$parent.nbWinDrop == scope.$parent.nbResponses){
                        scope.$parent.win = true;
                    }
                    var dropped = ui.draggable;
                    ui.draggable.detach();
                    dropped.css('position', 'static').css('width', '100%').appendTo($('#'+attrs['id']));
                    scope.$apply();
                }
            });
        }
    }
});