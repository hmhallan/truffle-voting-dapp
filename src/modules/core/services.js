(function(){
	
    angular.module('voting.dapp.services')
    
    .service('web3provider', [ 'DAPP_CONFIG', function (DAPP_CONFIG) {

        if (typeof web3 !== 'undefined') {
            var web3provider = web3.currentProvider;
            return web3provider;
        } else {
            var web3provider = new Web3.providers.HttpProvider("http://" + DAPP_CONFIG.server + ":" + DAPP_CONFIG.port);
            return web3provider;
        }

    }])
    
    .service('web3', [ 'web3provider', function (web3provider) {
            return new Web3(web3provider);
    }]);
    
    
}).call(this);