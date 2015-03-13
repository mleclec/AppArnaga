/**
 * Created by Yannick on 12/03/2015.
 */
AppArnaga.factory('TextFactory', function($http, $q){
    var factory = {
        texts: false,
        getTexts : function(){
            var deferred = $q.defer();
            $http.get('json/textesGeneraux.json')
                .success(function(data, status){
                    factory.texts = data[0];
                    deferred.resolve(factory.texts);
                }).error(function(data, status){
                    deferred.reject('Impossible de récupérer les articles.');
                });
            return deferred.promise;
        },
        getText : function(id){
            var deferred = $q.defer();
            var text = "";
            var texts = factory.getTexts().then(function(texts){
                angular.forEach(texts, function(value, key){
                    if (key == id){
                        text = value;
                    }
                });
                deferred.resolve(text);
            }, function(msg){
                deferred.reject(msg);
            });
            return deferred.promise;
        }
    }
    return factory;
});
