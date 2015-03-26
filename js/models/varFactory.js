/**
 * Created by Yannick on 26/03/2015.
 */
AppArnaga.factory('VarFactory', function(){
    var factory = {
        vars : {'avatar' : '', 'playerName' : ''},

        getVar : function(value){
            return factory.vars[value];
        },
        setVar : function(varName, varValue){
            factory.vars[varName] = varValue;
        }
    }
    return factory;
});
