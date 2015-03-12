/**
 * Created by Yannick on 12/03/2015.
 */
AppArnaga.factory('TextFactory', function(){
    var factory = {
        texts : "ici le json",
        getTexts : function(){
            return factory.texts;
        },
        getText : function(text){
            return factory.texts[0].text;
        }
    }
    return factory;
});
