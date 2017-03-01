angular.module('tic-tac-toe-board-service', []).factory('TicTacToeBoardService', function () {
  var SIZE = 3;
  var board = [];
  var totalPlacedCells = 0;

  return {
    getBoard: function () {
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
      return '';
    }
  };
});
