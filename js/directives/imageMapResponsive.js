/**
 * Created by Yannick on 12/04/2015.
 */
AppArnaga.directive('ngMap', function($window){
    return {
        restrict: 'A',
        link: function(scope, element, attrs){
            element.bind('load', function() {

                var w = $(element).attr('width'),
                    h = $(element).attr('height');

                function resize(){
                    if (!w || !h) {
                        var temp = new Image();
                        temp.src = $(element).attr('src');
                        if(temp.src == undefined)
                            temp.src = $(element).attr('ng-src');

                        if (!w)
                            w = temp.width;
                        if (!h)
                            h = temp.height;
                    }

                    var wPercent = $(element).width()/100,
                        hPercent = $(element).height()/100,
                        map = attrs.usemap.replace('#', ''),
                        c = 'coords';

                    angular.element('map[name="' + map + '"]').find('area').each(function(){
                        var $this = $(this);

                        if (!$this.data(c)){
                            $this.data(c, $this.attr(c));
                        }

                        var coords = $this.data(c).split(','),
                            coordsPercent = new Array(coords.length);

                        for (var i = 0; i<coordsPercent.length; ++i){
                            if (i % 2 === 0){
                                coordsPercent[i] = parseInt(((coords[i]/w)*100)*wPercent);
                            } else {
                                coordsPercent[i] = parseInt(((coords[i]/h)*100)*hPercent);
                            };
                        };
                        $this.attr(c, coordsPercent.toString());
                    });
                }
                angular.element($window).resize(resize).trigger('resize');
            });
        }
    }
});
