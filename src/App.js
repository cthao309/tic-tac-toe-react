import React, { Component } from 'react';
import './App.css';

import Announcement from './Announcement/Announcement'
import ResetButton from './ResetButton/ResetButton'
import Tile from './Tile/Tile'

class App extends Component {
	state = {
		gameBoard: [
			' ', ' ', ' ',
			' ', ' ', ' ',
			' ', ' ', ' '
		],
		turn: 'x',
		winner: null,
	}

	updateBoard(loc, player) {
		// Check if it is a valid move
		if(this.state.gameBoard[loc] === 'x' || this.state.gameBoard[loc] === 'o' || this.state.winner) {
			// Invalid move
			return;
		}

		// Make copy of the game board and set its state to re-render
		let currentGameBoard = this.state.gameBoard;
		currentGameBoard.splice(loc, 1, this.state.turn)
		this.setState({ gameBoard: currentGameBoard })

		// winner combination 012, 345, 678, 036, 147, 258, 048, 246 
		let topRow = this.state.gameBoard[0] + this.state.gameBoard[1] + this.state.gameBoard[2];
		if(topRow.match(/xxx|ooo/)) {
			this.setState({ winner: this.state.turn });
			return;
		}

		let middleRow = this.state.gameBoard[3] + this.state.gameBoard[4] + this.state.gameBoard[5];
		if(middleRow.match(/xxx|ooo/)) {
			this.setState({ winner: this.state.turn });
			return;
		}

		let bottomRow = this.state.gameBoard[6] + this.state.gameBoard[7] + this.state.gameBoard[8];
		if(bottomRow.match(/xxx|ooo/)) {
			this.setState({ winner: this.state.turn });
			return;
		}

		let leftColumn = this.state.gameBoard[0] + this.state.gameBoard[3] + this.state.gameBoard[6];
		if(leftColumn.match(/xxx|ooo/)) {
			this.setState({ winner: this.state.turn });
			return;
		}

		let middleColumn = this.state.gameBoard[1] + this.state.gameBoard[4] + this.state.gameBoard[7];
		if(middleColumn.match(/xxx|ooo/)) {
			this.setState({ winner: this.state.turn });
			return;
		}

		let rightColumn = this.state.gameBoard[2] + this.state.gameBoard[5] + this.state.gameBoard[7];
		if(rightColumn.match(/xxx|ooo/)) {
			this.setState({ winner: this.state.turn });
			return;
		}

		let leftDiagonal = this.state.gameBoard[0] + this.state.gameBoard[4] + this.state.gameBoard[8];
		if(leftDiagonal.match(/xxx|ooo/)) {
			this.setState({ winner: this.state.turn });
			return;
		}

		let rightDiagonal = this.state.gameBoard[2] + this.state.gameBoard[4] + this.state.gameBoard[6];
		if(rightDiagonal.match(/xxx|ooo/)) {
			this.setState({ winner: this.state.turn });
			return;
		}

		// check if all the square has been fill and nobody is a winner, set winner state to "draw"
		let moves = this.state.gameBoard.join('').replace(/ /g, '');
		if(moves.length === 9) {
			this.setState({ winner: 'draw' })
		}

		// Toggle between turn
		this.setState({ turn: this.state.turn === 'x' ? 'o' : 'x' })

	}

	resetBoard() {
		this.setState({
			gameBoard: [
				' ', ' ', ' ',
				' ', ' ', ' ',
				' ', ' ', ' '
			],
			turn: 'x',
			winner: null,
		})
	}

	render() {
		return ( 
			<div className="container">
				<div className="menu">
					<h1>Tic-Tac-Toe</h1>
					<Announcement 
						winner={this.state.winner}
						turn={this.state.turn}/>
					<ResetButton reset={this.resetBoard.bind(this)}/>
				</div>
				{this.state.gameBoard.map(function(value, i) {
					return (
						<Tile 
							key={i}
							loc={i}
							value={value}
							updateBoard={this.updateBoard.bind(this)}
							turn={this.state.turn} />
					)}.bind(this))}
			</div>
		);
	}
}

export default App;