/**
 * Created by Yannick on 13/04/2015.
 */
AppArnaga.directive('ngDrag', function(){
    return {
        restrict: 'A',
        link: function(scope, element, attrs){
            $(element).draggable({
                snap: '.snap',
                revert: 'invalid',
                drag: function(event, ui){
                   // ui.helper.preventDefault();
                }
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
                    scope.$parent.sons[ui.draggable.attr('id')]['drop'] = true;
                    scope.$parent.images[ui.draggable.attr('id')]['drop'] = true;
                    scope.$parent.dropCode = attrs['id'];
                    scope.$parent.dragCode = ui.draggable.attr('id');
                    var dropped = ui.draggable;
                    console.log(ui);
                    $(dropped).detach().css('position', 'static').css('width', '100%').appendTo($('#'+attrs['id']));
                    if ($filter('limitTo')(scope.$parent.dropCode, -1) == scope.$parent.dragCode){
                        scope.$parent.nbWinDrop++;
                    }
                    if (scope.$parent.nbWinDrop==scope.$parent.nbResponses){
                        scope.$parent.win = true;
                    }
                    scope.$apply();
                }
            });
        }
    }
});