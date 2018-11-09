pragma solidity ^0.4.24;

contract TTT {
    uint[] board = new uint[](9);
    address players[2];
    address moderator;
    uint turn = 0;
    uint num_players = 0;
    
    constructor(){
        moderator = msg.sender;
    }
    
    function register()
    public
    {
        require(num_players < 2, "Can not register");
        player2 = msg.sender;
    }
    
}
