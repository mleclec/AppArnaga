/**
 * Created by Yannick on 26/03/2015.
 */
AppArnaga.factory('HomeFactory', function($http, $q){
    var factory = {
        home: false,
        numPlace : 0,
        getNumPlace : function(){
            return factory.numPlace;
        },
        incrNumPlace : function(){
            factory.numPlace = factory.numPlace + 1;
        },
        getHome : function(){
            var deferred = $q.defer();
            $http.defaults.headers.common['Cache-Control'] = 'no-cache';
            $http.defaults.headers.common['Pragma'] = 'no-cache';
            $http.defaults.headers.common['Expires'] = '-1';
            $http.get('json/parcoursMaison.json')
                .success(function(data, status){
                    factory.home = data;
                    deferred.resolve(factory.home);
                }).error(function(data, status){
                    deferred.reject('Impossible de récupérer le json.');
                });
            return deferred.promise;
        },
        getQuestion : function(place, number){
            return factory.home[place][number];
        },
        getQuestions : function(place){
            return factory.home[place];
        },
        getPlaces : function(){
            return Object.keys(factory.home);
        }
    }
    return factory;
});

