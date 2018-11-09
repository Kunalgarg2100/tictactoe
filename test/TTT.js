var pFee = 30;
const TTT = artifacts.require("TTT");
contract("TTT", async(accounts) => {
    var ticTacToe;

    it("tests that moderator invoked the game", async () => {
        ticTacToe = await TTT.new(pFee, {from: accounts[0]});
        let addr = await ticTacToe.moderatorExists();
        assert.equal(addr, accounts[0], "moderator didnt start the game");

    });
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////    

    it("tests that player 1 registers", async () => {
			await ticTacToe.register({from: accounts[1], value: pFee});
      let val1 = await ticTacToe.playerExists(accounts[1]);
      assert.equal(val1, 1, "player isn't registered");

    });

    it("tests that player 2 registers", async () => {
      await ticTacToe.register({from: accounts[2], value: pFee});
      let val1 = await ticTacToe.playerExists(accounts[2]);
      assert.equal(val1, 1, "player isn't registered");

    });


// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    it("tests that more than 2 players cant registers", async () => {
			ticTacToe.register(accounts[4]);
			let val1 = await ticTacToe.totalPlayers();
      assert.equal(val1, 2, "more then 2 players registered!!");
    });

		it("tests that more than 2 players cant registers", async () => {
			ticTacToe.register(accounts[5]);
			let val1 = await ticTacToe.totalPlayers();
      assert.equal(val1, 2, "more then 2 players registered!!");
    });

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     it("tests that beneficiary has successfully started the ticTacToe", async () => {
//       await ticTacToe.startticTacToe({from: accounts[0]});
//       let val1 = await ticTacToe.ticTacToeStarted();
//       assert.equal(val1, "The ticTacToe will begin in a few minutes", "unregistered player is participating!!");
//     });
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////    
//     block = web3.eth.getBlock("latest");
//     var startTime = block.number;
    
//     var stTime1 = startTime + delay
//     var endTime1 = stTime1 + ticTacToeTime;
//     var stTime2 = endTime1 + delay; 
//     var endTime2 = stTime2 + ticTacToeTime; 
//     var stTime3 = endTime2 + delay; 
//     var endTime3 = stTime3 + ticTacToeTime;
//     var stTime4 = endTime3 + delay; 
//     var endTime4 = stTime4 + ticTacToeTime;
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     it("tests that player 1 doesnt get the question before start time", async () => {
//       let val1 = await ticTacToe.getQuestion({from: accounts[1]});
//       assert.equal(val1, "Sorry!! ticTacToe ended", "player gets the question before start time");
//     });
    
//     it("tests that player 2 doesnt get the question before start time", async () => {
//       let val1 = await ticTacToe.getQuestion({from: accounts[2]});
//       assert.equal(val1, "Sorry!! ticTacToe ended", "player gets the question before start time");
//     });

//     it("tests that player 3 doesnt get the question before start time", async () => {
//       let val1 = await ticTacToe.getQuestion({from: accounts[3]});
//       assert.equal(val1, "Sorry!! ticTacToe ended", "player gets the question before start time");
//     });
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     var i;
//     for(i=1;i<delay;i++){
//       it("Increasing Block Number", async () => {
//         await ticTacToe.increaseBlocks({from: accounts[0], value: 0});
//         assert.equal(true, true, "failed to increase");
//       });
//     }
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     it("tests that player 1 gets the question 1 in allotted time", async () => {
//       let val1 = await ticTacToe.getQuestion({from: accounts[1]});
//       assert.equal(val1, ques1, "player gets the question before start time");
//     });
    
//     it("tests that player 2 gets the question 1 in allotted time", async () => {
//       let val1 = await ticTacToe.getQuestion({from: accounts[2]});
//       assert.equal(val1, ques1, "player gets the question before start time");
//     });

//     it("tests that player 3 gets the question 1 in allotted time", async () => {
//       let val1 = await ticTacToe.getQuestion({from: accounts[3]});
//       assert.equal(val1, ques1, "player gets the question before start time");
//     });
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     it("tests that player 1 gets to submit answer to question 1 in allotted time", async () => {
//       await ticTacToe.submitAnswer(keccak256(ans1), {from: accounts[1], value: 0});
//       let val1 = await ticTacToe.hasSubmitted(1 ,{from: accounts[1]});
//       assert.equal(val1, true, "player gets the question before start time");
//     });
    
//     it("tests that player 1 cant submit for the question 1 more then once", async () => {
//       await ticTacToe.submitAnswer(keccak256(ans1), {from: accounts[1], value: 0});
//     });

//     it("tests that player 2 cant submit answer to question 1 in allotted time as player 1 has already done", async () => {
//       await ticTacToe.submitAnswer(keccak256(ans1), {from: accounts[2], value: 0});
//       let val1 = await ticTacToe.hasSubmitted(1 ,{from: accounts[2]});
//       assert.equal(val1, true, "player gets the question before start time");
//     });
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////

});