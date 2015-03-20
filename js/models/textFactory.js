/**
 * Created by Yannick on 12/03/2015.
 */
AppArnaga.factory('TextFactory', function($http, $q){
    var factory = {
        texts: false,
        getTexts : function(){
            var deferred = $q.defer();
            $http.defaults.headers.common['Cache-Control'] = 'no-cache';
            $http.defaults.headers.common['Pragma'] = 'no-cache';
            $http.defaults.headers.common['Expires'] = '-1';
            $http.get('json/textesGeneraux.json')
                .success(function(data, status){
                    factory.texts = data[0];
                    deferred.resolve(factory.texts);
                }).error(function(data, status){
                    deferred.reject('Impossible de récupérer les articles.');
                });
            return deferred.promise;
        }
    }
    return factory;
});
