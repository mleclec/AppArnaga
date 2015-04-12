/**
 * Created by Yannick on 12/04/2015.
 */
AppArnaga.directive('ngCanvas', function(){
    return {
        restrict: 'A',
        scope: false,
        link: function(scope, element, attrs){
            var canvas = $(element);
            canvas.attr('width', '903');
            canvas.attr('height', '508');
            $('window').resize(function(){
                var width = $('img').attr('width');
                var height = $('img').attr('height');
                canvas.attr('width', '903');
                canvas.attr('height', '508');
            });
            canvas.css('position', 'absolute');
            canvas.css('z-index', '1');
            $('img').css('position', 'relative');
            $('img').css('z-index', '2');

            $('area').click(function(){
                scope.nbClick++;
                var coords = $(this).attr('coords');
                var tabAllCoords = new Array();
                var tabCoords = coords.split(',');
                var nbCoords = (coords.match(/,/g) || []).length+1;
                var nbX = 0;
                var nbY = 1;
                for (var i=0; i<nbCoords/2; i++){
                    var array = new Array();
                    array.push(tabCoords[nbX], tabCoords[nbY]);
                    tabAllCoords.push(array);
                    nbX = nbX + 2;
                    nbY = nbY + 2;
                }
                // The .drawLine() object
                var obj = {
                    strokeStyle: '#000',
                    strokeWidth: 6,
                    rounded: true,
                    closed: true
                };

                // Your array of points
                var pts = tabAllCoords;

                // Add the points from the array to the object
                for (var p=0; p<pts.length; p+=1) {
                    obj['x'+(p+1)] = pts[p][0];
                    obj['y'+(p+1)] = pts[p][1];
                }

                // Draw the line
                canvas.drawLine(obj);
                if (scope.nbClick==3){
                    canvas.css('z-index', '3');
                    scope.win = true;
                }
                scope.$apply();
            });
        }
    }
});

