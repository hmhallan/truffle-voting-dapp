var Voting = artifacts.require("Voting");

contract('Voting', function(accounts) {

  it("Add a proposal", function() {

    return Voting.deployed().then(function(instance) {
      return instance.addProposal.call('Unit Test Proposal');
    })
    .then(function(data) {
      assert.equal(data, true, "Error on add Proposal");
    });

  });

  it("Vote a proposal", function() {
    var votingInstance;

    return web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }
      var account = accounts[0];

      return Voting.deployed()
      
      .then(function(instance) {
        votingInstance = instance;
        return votingInstance.addProposal('Unit Test First Proposal');
      })

      .then(function(data) {
        return votingInstance.vote.call(0, 1, {from: account, gas: 4712388});
      })
      
      .then(function(data) {
        assert.equal(data, true, "Error voting on proposal");
      });
    });
  });

});
