(function(){

angular.module('voting.dapp.services').service('api', [ 'web3', 'contracts', '$q', function(web3, contracts, $q){

    return {

        firstAccount: function(){
            var deferred = $q.defer();

            web3.eth.getAccounts(function(error, accounts) {
                if (error) {
                    console.log(error);
                }
                var account = accounts[0];
                deferred.resolve(account);
            });

            return deferred.promise;
        },

        proposal: {
            vote: function( proposal, value, account ){
                var deferred = $q.defer();
                contracts.voting().then(function(instance){
                    instance.vote( proposal.id, value, {from: account, gas: 4712388} ).then(function(result) {
                        var event = instance.CreatedVoteEvent();

                        //in this case, return the event that will be fired when the add in the blockchain is mined
                        deferred.resolve(event);
                    });
                });
                return deferred.promise;
            },

            create: function( proposal, account ){
                var deferred = $q.defer();
                contracts.voting().then(function(instance){
                    instance.addProposal( proposal.name, {from: account} ).then(function(result) {
                        var event = instance.CreatedProposalEvent();

                        //in this case, return the event that will be fired when the add in the blockchain is mined
                        deferred.resolve(event);
                    });
                });
                return deferred.promise;
            },

            get: function(index){
                var deferred = $q.defer();
                contracts.voting().then(function(instance){
                    instance.getProposal.call( index ).then(function(data) {
                        var proposal = {
                            id: data[0].toNumber(),
                            name: data[1],
                            numPos: data[2].toNumber(),
                            numNeg: data[3].toNumber(),
                            numAbs: data[4].toNumber()
                        };
                        deferred.resolve(proposal);
                    });
                });
                return deferred.promise;
            },

            getTotal: function(){
                var deferred = $q.defer();
                contracts.voting().then(function(instance){
                    instance.getNumProposals.call().then(function(numProposals) {
                        deferred.resolve(numProposals.toNumber());
                    }); 
                });
                return deferred.promise;
            }

        }

        
    };

    }]);

}).call(this);