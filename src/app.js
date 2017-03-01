angular.module('ticTacToeApp', ['ticTacToeBoardService']).controller('TicTacToeController', function (TicTacToeBoardService, $timeout) {
  var ticTacToe = this;

  var PLAYERS = {
    0: 'X',
    1: 'O'
  };

  ticTacToe.restart = function () {
    TicTacToeBoardService.reset();
    ticTacToe.board = TicTacToeBoardService.board();
  };
  ticTacToe.restart();

  ticTacToe.placeAt = function (row, column, player) {
    TicTacToeBoardService.placeAt(row, column, player);

    $timeout(function () {
      var winner = TicTacToeBoardService.checkWinner();
      if (winner) alert("Winner is " + winner);
      else if (TicTacToeBoardService.isFull()) alert("Draw game");
    }, 100);
  };

  ticTacToe.getCurrentPlayer = function () {
    return PLAYERS[TicTacToeBoardService.getTotalPlacedCells() % 2];
  };
});