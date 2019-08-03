import React, { Component } from 'react';
import './Announcement.css';

export default class Announcement extends Component {
	render() {
		return (
			<div className={this.props.winner ? 'visible' : 'hidden'}>
				<h2>Game Over</h2>
				<h3>"{this.props.turn.toUpperCase()}" Wins!</h3>
			</div>
		)
	}
}