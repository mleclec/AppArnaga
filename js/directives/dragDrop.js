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

AppArnaga.directive('ngDrop', function(){
    return {
        restrict: 'A',
        link: function(scope, element, attrs){
            $(element).droppable({
                drop : function(event, ui){
                    scope.$parent.dropCode = attrs['id'];
                    console.log(scope.$parent.dropCode);
                    scope.$parent.dragCode = ui.draggable.attr('id');
                    var dropped = ui.draggable;
                    $(dropped).detach().css('position', 'static').appendTo($('#'+attrs['id']));
                }
            });
        }
    }
});