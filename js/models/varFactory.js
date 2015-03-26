/**
 * Created by Yannick on 26/03/2015.
 */
AppArnaga.factory('VarFactory', function(){
    var factory = {
        vars : {'avatar' : '', 'playerName' : ''},

        getVar : function(varName){
            return factory.vars['varName'];
        },
        setVar : function(varName, varValue){
            factory.vars['varName'] = varValue;
        }
    }
    return factory;
});
