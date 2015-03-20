/**
 * Created by Yannick on 13/03/2015.
 */
AppArnaga.directive('ngGsap', function(){
    var linker = function (scope, element, attrs) {
        var tl =  new TimelineLite(); // on instancie un objet de la classe TimelineLite
        tl.to(element, 1, {height: 400}); // animation sur l'élément, la hauteur change en 1 sec, #debut est le nom de l'animation
        tl.from(element.find("img"), 0.5, {opacity:0}, "-=0.5"); // le dernier paramètre -> décalage de 0.5s par rapport à l'animation précédente
        tl.staggerFrom(element.find("li"), 0.3, {opacity:0, scale:0.5}, 0.3); // staggerFrom -> les éléments sont animés les uns après les autres, le dernier paramètre est le temps entre ces animations
        tl.from(element.find("h2"), 0.4, {marginLeft:20, opacity:0}, "#debut");
        tl.from(element.find("p"), 0.4, {marginLeft:20, opacity:0}, "#debut");
        tl.pause();

        scope.play = function() {
            tl.play();
        };

        scope.reverse = function() {
            tl.reverse();
        };
    };

    return {
        scope: true,
        link: linker
    }
});
