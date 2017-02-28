angular.module('ticTacToeApp', []).controller('TicTacToeController', function (TicTacToeBoardService) {
  var ticTacToe = this;

  var PLAYERS = {
    0: 'X',
    1: 'O'
  };

  TicTacToeBoardService.reset();
  ticTacToe.board = TicTacToeBoardService.board;
  ticTacToe.placeAt = TicTacToeBoardService.placeAt;

  ticTacToe.getCurrentPlayer = function () {
    return PLAYERS[TicTacToeBoardService.totalPlacedCells % 2];
  };
}).factory('TicTacToeBoardService', function () {
  var self = this;
  var TOTAL_CELLS = 9;
  self.board = [];
  self.totalPlacedCells = 0;

  self.reset = function () {
    self.totalPlacedCells = 0;
    self.board = [
      [
        {value: ''},
        {value: ''},
        {value: ''}
      ],
      [
        {value: ''},
        {value: ''},
        {value: ''}
      ],
      [
        {value: ''},
        {value: ''},
        {value: ''}
      ]
    ]
  };

  self.isEnded = function () {
    return self.totalPlacedCells >= TOTAL_CELLS;
  };

  self.placeAt = function (row, column, player) {
    var cell = self.board[row][column];
    if (!cell.value) {
      cell.value = player;
      self.totalPlacedCells++;
    }
  };

  return self;
});
