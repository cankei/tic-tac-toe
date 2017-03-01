describe('Tic Tac Toe Board Service', function () {
  var TicTacToeBoardService;
  beforeEach(function () {
    module('tic-tac-toe-board-service');
  });

  beforeEach(inject(function (_TicTacToeBoardService_) {
    TicTacToeBoardService = _TicTacToeBoardService_;
  }));

  it('can get an instance of TicTacToeBoardService', function () {
    expect(TicTacToeBoardService).toBeDefined();
  });

  describe('placeAt method', function () {
    beforeEach(function () {
      TicTacToeBoardService.reset();
    });

    it('can place a move', function () {
      TicTacToeBoardService.placeAt(0, 0, 'X');
      expect(TicTacToeBoardService.getBoard()[0][0].value).toBe('X');
      expect(TicTacToeBoardService.getTotalPlacedCells()).toBe(1);
    });

    it('cannot place a move at a taken location', function () {
      TicTacToeBoardService.placeAt(0, 1, 'X');
      expect(TicTacToeBoardService.getBoard()[0][1].value).toBe('X');
      expect(TicTacToeBoardService.getTotalPlacedCells()).toBe(1);
      TicTacToeBoardService.placeAt(0, 1, 'O');
      expect(TicTacToeBoardService.getBoard()[0][1].value).toBe('X');
      expect(TicTacToeBoardService.getTotalPlacedCells()).toBe(1);
    });
  });

  describe('checkWinner method', function () {
    beforeEach(function () {
      TicTacToeBoardService.reset();
    });

    it('returns an empty string for empty board', function () {
      expect(TicTacToeBoardService.checkWinner()).toBe('');
    });

    it('returns the correct player if the same player forms a horizontal line', function () {
      TicTacToeBoardService.placeAt(1, 1, 'O');
      TicTacToeBoardService.placeAt(2, 1, 'O');
      TicTacToeBoardService.placeAt(0, 1, 'O');
      expect(TicTacToeBoardService.checkWinner()).toBe('O');
    });

    it('returns the correct player if the same player forms a vertical line', function () {
      TicTacToeBoardService.placeAt(2, 0, 'X');
      TicTacToeBoardService.placeAt(2, 1, 'X');
      TicTacToeBoardService.placeAt(2, 2, 'X');
      expect(TicTacToeBoardService.checkWinner()).toBe('X');
    });

    it('returns the correct player if the same player forms a diagonal line', function () {
      TicTacToeBoardService.placeAt(2, 0, 'O');
      TicTacToeBoardService.placeAt(1, 1, 'O');
      TicTacToeBoardService.placeAt(0, 2, 'O');
      expect(TicTacToeBoardService.checkWinner()).toBe('O');
    });

    it('returns an empty string if no player has formed a diagonal line', function () {
      TicTacToeBoardService.placeAt(2, 0, 'O');
      TicTacToeBoardService.placeAt(1, 1, 'O');
      TicTacToeBoardService.placeAt(0, 2, 'X');
      expect(TicTacToeBoardService.checkWinner()).toBe('');
    });
  });
});
