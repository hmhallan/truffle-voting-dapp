(function(){

angular.module('voting.dapp.services').service('contracts', ['$http', 'web3provider', '$q', function($http, web3provider, $q){

    return {

        voting: function(){

            var deferred = $q.defer();

            $http.get('./Voting.json').then(function(response) {
                
                // Get the necessary contract artifact file and instantiate it with truffle-contract
                var voting = TruffleContract(response.data);
                
                // Set the provider for our contract
                voting.setProvider(web3provider);


                voting.deployed().then(function(instance) {
                    deferred.resolve(instance);
                });

            });

            return deferred.promise;
        }

    };

    }]);

}).call(this);