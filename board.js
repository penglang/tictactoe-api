var tic = require('../lib/index.js')
var should = require('should')
var toe = new tic;

describe('tictactoe', function(){
	it('should rest board ', function(){
		toe.resetGame()
		toe.turn('X', {posRow: 0, posCol: 0})
		toe.turn('O', {posRow: 2, posCol: 2})
		toe.board[0][0].should.equal('X');
		toe.resetGame()
		toe.board[0][0].should.equal('-');
	})

	it('should not allow move to same position ', function(){
		toe.resetGame()
		toe.checkAllowedMove(0,0).should.equal(true)
		toe.turn('X', {posRow: 0, posCol: 0})
		toe.checkAllowedMove(0,0).should.equal(false)
		
	})

	it('should find a win', function(){
		toe.resetGame()
		toe.turn('X', {posRow: 0, posCol: 0})
		toe.board[0][0].should.equal('X');
	})

	it('should find a win', function(){
		toe.resetGame()
		toe.turn('X', {posRow: 0, posCol: 0})
		toe.turn('X', {posRow: 0, posCol: 1})
		toe.turn('X', {posRow: 0, posCol: 2})
		toe.checkWin().should.equal('X');
	})

	it('should find a draw', function(){
		toe.resetGame()
		toe.turn('X', {posRow: 0, posCol: 0})
		toe.turn('O', {posRow: 0, posCol: 1})
		toe.turn('X', {posRow: 0, posCol: 2})

		toe.turn('O', {posRow: 1, posCol: 0})
		toe.turn('O', {posRow: 1, posCol: 1})
		toe.turn('X', {posRow: 1, posCol: 2})

		toe.turn('X', {posRow: 2, posCol: 0})
		toe.turn('X', {posRow: 2, posCol: 1})
		toe.turn('O', {posRow: 2, posCol: 2})

		toe.checkWin().should.equal(false);
		toe.checkDraw().should.equal(true);
	})

	it('should play a CPU vs CPU game', function(){
		toe.playGame()
		toe.viewBoard()
		toe.gameOver.should.equal(true)
	})

	it('should prevent another turn after game finished', function(){
		toe.resetGame()
		toe.turn('X', {posRow: 0, posCol: 0})
		toe.turn('X', {posRow: 0, posCol: 1})
		toe.turn('X', {posRow: 0, posCol: 2})
		toe.checkWin()
		toe.turn('X', {posRow: 1, posCol: 0}).should.equal(false)
	})
})