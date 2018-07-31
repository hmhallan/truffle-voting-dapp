var Voting = artifacts.require("Voting");

contract('Voting', function(accounts) {

  var v1;

  before(function() {
    console.info("before");
      // runs before all tests in this block

      return Voting.deployed()
    
      .then(function(instance) {
        v1 = instance;
      });

  });

  beforeEach(function() {
    // runs before each test in this block
    console.info("before each");
  });

  after(function() {
    console.info("after");
    // runs after all tests in this block
  });

  afterEach(function() {
    console.info("after each");
    // runs after each test in this block
  });

  it("Add a proposal", function() {

    return Voting.deployed().then(function(instance) {
      return instance.addProposal.call('Unit Test Proposal');
    })
    .then(function(data) {
      assert.equal(data, true, "Error on add Proposal");
    });

  });

  it("Vote a proposal", function() {
    var account = accounts[0];

    return v1.addProposal('Unit Test First Proposal')
    
    .then(function(data) {
      return v1.vote.call(0, 1, {from: account, gas: 4712388});
    })
    
    .then(function(data) {
      assert.equal(data, true, "Error voting on proposal");
    });
  });

});
