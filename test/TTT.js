const TTT = artifacts.require('./TTT.sol')
const assert = require('assert')
let contractInstance
contract('TTT', (accounts) => {
	for(i=0;i<10;i++)
		console.log(i,accounts[i]);

    beforeEach(async () => {
       contractInstance = await TTT.deployed()
   	})
});
