pragma solidity ^0.4.24;

contract TTT {
    uint[] board = new uint[](9);
    address[2] players;
    address moderator;
    uint turn = 0;
    uint num_players = 0;
    mapping(address => uint) is_player;
    uint[][]  tests = [[0,1,2],[3,4,5],[6,7,8], [0,3,6],[1,4,7],[2,5,8], [0,4,8],[2,4,6]];
    uint public pFee;
    mapping(address => uint256) public pendingReturns;

    constructor(uint _pFee){
        moderator = msg.sender;
        pFee = _pFee;
    }

    function register()
    public
    payable
    {
        require(msg.value > pFee, "Insufficient funds sent");
        require(num_players < 2, "Can not register");
        require(is_player[msg.sender] == 0, "You have already registered for this quiz");
        players[num_players++] = msg.sender;
        is_player[msg.sender] = 1;
        pendingReturns[msg.sender] = msg.value - pFee;
    }


    function move(uint position)
    returns
    (string)
    {
        uint winner = c_winner();
        if(winner == 1){
            return "Game is up and player 1 won the game";
        }
        else if(winner == 2){
            return "Game is up and player 2 won the game";
        }
        if(turn == 0){
            if(players[0] != msg.sender){
                return "Sorry this is not your turn";
            }
        }
        if(turn == 1){
            if(players[1] != msg.sender){
                return "Sorry this is not your turn";
            }
        }
        if(position >= 0 && position <= 8){
            if(board[position] == 0){
                board[position] = turn+1;
                turn = 1 - turn;
                return "You have placed at the required position";
            }
            else{
                return "This position is already filled";
            }
        }
        else{
            return "Please provide a valid position";
        }
    }

    function c_winner()
    returns
    (uint)
    {
        for(uint i = 0;i < 8; i++){
            uint[] memory m = tests[i];
            if(board[m[0]] != 0 && board[m[0]] == board[m[1]] && board[m[1]] == board[m[2]])
                return board[m[0]];
        }
        return 0;
    }

    /* Player withdraws his winnnings, if any */
    function withdraw()
    public
    returns (bool)
    {
        uint256 amount = pendingReturns[msg.sender];
        if (amount > 0)
        {
            pendingReturns[msg.sender] = 0;
            msg.sender.transfer(amount);
        }
        return true;
    }

    function get_current_state()
    returns
    (string, string, string, string)
    {
        string memory ret = "";
        uint winner = c_winner();
        if(winner == 1){
            ret = "Player 1 is the winner";
        }
        else if(winner == 2){
            ret = "Player 2 is the winner";
        }
        else{
            ret = "No one has won the game yet";
        }
        bytes memory a = new bytes(4);
        byte[] memory signs = new byte[](3);
            signs[0] = "-";
            signs[1] = "1";
            signs[2] = "2";
        for(uint i = 0; i < 3; i++){
            bytes(a)[i] = signs[board[i]];
        }
        bytes memory b = new bytes(4);
        for(i = 0; i < 3; i++){
            bytes(b)[i] = signs[board[i+3]];
        }
        bytes memory c = new bytes(4);
        for(i = 0; i < 3; i++){
            bytes(c)[i] = signs[board[i+6]];
        }
        return (ret, string(a), string(b), string(c));
    }

}
