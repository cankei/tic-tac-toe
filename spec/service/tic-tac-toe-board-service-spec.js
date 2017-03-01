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

  // describe('', function () {
  //
  // });
});
