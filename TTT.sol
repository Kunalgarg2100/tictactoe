pragma solidity ^0.4.24;

contract TTT {
    uint[] board = new uint[](9);
    address players[2];
    address moderator;
    uint turn = 0;
    uint num_players = 0;
    mapping(address => uint) is_player;
    uint[][]  tests = [[0,1,2],[3,4,5],[6,7,8], [0,3,6],[1,4,7],[2,5,8], [0,4,8],[2,4,6]  ]; 

    constructor(){
        moderator = msg.sender;
    }
    
    function register()
    public
    {
        require(num_players < 2, "Can not register");
        require(is_player[msg.sender] == 0, "You have already registered for this quiz");
        player[num_players++] = msg.sender;
        is_player[msg.sender] = 1;
    }

    function move(uint place)
    returns 
    string
    {
        uint winner = c_winner();
        if(winner == 1){
            return "Game is up and player 1 won the game";
        }
        else if(winner == 2){
            return "Game is up and player 2 won the game";
        }
         
    } 

    function c_winner()
    returns
    uint
    {
        for(uint i = 0;i < 8; i++){
            uint[] memory m = tests[i];
            if(board[m[0]] != 0 && board[m[0]] == board[m[1]] && board[m[1]] == board[m[2]]))
                return board[m[0]];
        }
        return -1;
    }
    
}
