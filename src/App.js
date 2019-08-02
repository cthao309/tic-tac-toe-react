import React, { Component } from 'react';
import './App.css';

import Announcement from './Announcement/Announcement'
import ResetButton from './ResetButton/ResetButton'
import Tile from './Tile/Tile'
import { thisExpression } from '@babel/types';

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
					<Announcement winner={this.state.winner}/>
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