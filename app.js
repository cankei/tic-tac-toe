angular.module('ticTacToeApp', []).controller('TicTacToeController', function (TicTacToeBoardService, $timeout) {
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
}).factory('TicTacToeBoardService', function () {
  var self = this;
  var SIZE = 3;
  var board = [];
  var totalPlacedCells = 0;

  return {
    board: function () {
      return board;
    },
    getTotalPlacedCells: function () {
      return totalPlacedCells;
    },
    reset: function () {
      totalPlacedCells = 0;
      board = [
        [
          {value: ''}, {value: ''}, {value: ''}
        ], [
          {value: ''}, {value: ''}, {value: ''}
        ], [
          {value: ''}, {value: ''}, {value: ''}
        ]
      ]
    },
    placeAt: function (row, column, player) {
      var cell = board[row][column];
      if (!cell.value) {
        cell.value = player;
        totalPlacedCells++;
      }
    },
    isFull: function () {
      return totalPlacedCells >= SIZE * SIZE;
    },
    checkWinner: function () {
      for (var i = 0; i < SIZE; ++i) {
        if (board[i][0].value && board[i][0].value === board[i][1].value && board[i][0].value === board[i][2].value)
          return board[i][0].value;
        if (board[0][i].value && board[0][i].value === board[1][i].value && board[0][i].value === board[2][i].value)
          return board[0][i].value;
      }
      if (board[0][0].value && board[0][0].value === board[1][1].value && board[0][0].value === board[2][2].value)
        return board[0][0].value;
      if (board[0][2].value === board[1][1].value && board[0][2].value === board[2][0].value) return board[0][2].value;
    }
  };
});
