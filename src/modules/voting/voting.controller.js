(function(){
	
	angular.module('voting.dapp.controllers').controller('VotingController', ['$scope', 'api', function ($scope, api) {


        $scope.proposal = {};

        $scope.onClickNewProposal = function(){

            //get the account
            api.firstAccount().then(function(account){

                //create the proposal
                api.proposal.create($scope.proposal, account).then(function(event){

                    //reset model
                    $scope.proposal = {};

                    //listen to event
                    event.watch(function(error, result) {
                        if (!error) {
                            $scope.getProposals();
                        } else {
                          console.log(error);
                        }
                        event.stopWatching();
                      });
                });
            });
        }

        $scope.onClickVote = function( proposal, type ){
            //get the account
            api.firstAccount().then(function(account){

                //vote
                api.proposal.vote(proposal, type, account).then(function(event){
                    
                    //listen to event
                    event.watch(function(error, result) {
                        if (!error) {
                            $scope.getProposals();
                        } else {
                          console.log(error);
                        }
                        event.stopWatching();
                      });
                });
            });
        }

        $scope.getProposals = function(){
            api.proposal.getTotal().then(function(data){
                $scope.proposals = [];
    
                $scope.numProposals = data;
    
                for (var i = 0; i < $scope.numProposals; i++) {
                    api.proposal.get( i ).then(function(p){
                        $scope.proposals.push(p);
                    });
                }
            });    
        }

        $scope.getProposals();
        
    }]);
    
    
}).call(this);