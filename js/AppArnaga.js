/**
 * Created by Yannick on 12/03/2015.
 * UpDate by Marine on 16/03/2015.
 **/
var AppArnaga = angular.module('AppArnaga', ['ngRoute', 'ngSanitize']);


// gestion du menu
(function($) {

    // apparition du menu lors du clic sur l'icône de menu
    $("#btnMenu").click(function(e){
        e.preventDefault();
        $("#nav-menu").css({"transform": "translateX(0)"});
        $("#site-cache").addClass("site-cache");
    });

    // apparition du menu lors du clic sur la zone sombre de la page
    $("#site-cache").click(function(e){
        $("#nav-menu").css({"transform": "translateX(200px)"});
        $(this).removeClass("site-cache");
    });
})(jQuery);