import React, { Component } from 'react';
import './styles.css';

export default class Image extends Component {
	render() {
		return (
			<div className="image">
				<p>{this.props.name}</p>
				<img src={this.props.link} alt={this.props.name} />
			</div>
		);
	}
}
