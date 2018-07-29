# Voting example DApp on Truffle Framework, adapted to AngularJS Framework.

This is a DApp example on Ethereum local network using Truffle Framework.

If you want use this dapp on ropsten testnet you can check this repo: https://github.com/bukosabino/truffle-voting-dapp-ropsten

We develop a DApp where the users can create proposals and vote them. Of course, they can vote once per proposal with the options in support, against or absence.


# Preconditions

This dapp is based on the official tutorial of Truffle Framework: http://truffleframework.com/tutorials/pet-shop. So, I strongly recommend to read it before.

You need to pay attention to configure and run Ganache (for a local blockchain) and MetaMask (for a client web blockchain).

# Deployment

* git clone https://github.com/hmhallan/truffle-voting-dapp.git
* cd truffle-voting-dapp
* npm install -g truffle
* npm install
* truffle compile
* truffle migrate --reset
* npm run dev

# Notes

If you restart your blockchain, it is needed to deploy the contracts again.

To do this, you will have to delete the JSON files in /build/contracts folder.

# TODO:

* Init and end dates to proposals.
* Anonymous users.

# Credits:

Changed to AngularJS front-end by Hallan Medeiros

Developed originally by Bukosabino at Lecrin Technologies - http://lecrintech.com

We are glad to receive any contribution, idea or feedback.

