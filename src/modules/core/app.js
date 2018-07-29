(function(){

    angular.module('voting.dapp.controllers', []);
    angular.module('voting.dapp.services', []);


    //module declaration
	var app = angular.module('voting-dapp', 
                             [  'voting.dapp.controllers', 
                                'voting.dapp.services',
                                'ngRoute',
                                'ngAnimate',
                                'ngSanitize'
                             ]);
                    
    //route provider
    app.config(['$routeProvider', function($routeProvider){

        $routeProvider
        .when('/voting', {
            templateUrl: 'modules/voting/voting.html', 
            controller: 'VotingController'
        })

        .otherwise ({ redirectTo: '/voting' });

    }]);


    //run
    app.run(function() {

    });

}).call(this);