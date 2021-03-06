angular.module('ticTacToeApp', ['tic-tac-toe-board-service']).controller('TicTacToeController', function (TicTacToeBoardService, $timeout) {
  var ticTacToe = this;

  var PLAYERS = {
    0: 'X',
    1: 'O'
  };

  ticTacToe.restart = function () {
    TicTacToeBoardService.reset();
    ticTacToe.board = TicTacToeBoardService.getBoard();
  };
  ticTacToe.restart();

  ticTacToe.hasEnded = function () {
    return TicTacToeBoardService.isFull() || TicTacToeBoardService.checkWinner();
  };

  ticTacToe.placeAt = function (row, column, player) {
    TicTacToeBoardService.placeAt(row, column, player);

    // set delay to make sure alert happens after the button click animation
    $timeout(function () {
      var winner = TicTacToeBoardService.checkWinner();
      if (winner) alert("Winner is player " + winner);
      else if (TicTacToeBoardService.isFull()) alert("Draw game");
    }, 100);
  };

  ticTacToe.getCurrentPlayer = function () {
    return PLAYERS[TicTacToeBoardService.getTotalPlacedCells() % 2];
  };
});