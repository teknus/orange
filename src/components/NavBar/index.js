import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import './styles.css';
export default class NavBar extends Component {
	selectedFood({ from }) {
		return from === 'food' ? 'selected' : 'unselected';
	}

	selectedPeople({ from }) {
		return from === 'people' ? 'selected' : 'unselected';
	}

	selectedPlaces({ from }) {
		return from === 'places' ? 'selected' : 'unselected';
	}
	render() {
		return (
			<div className="navbar">
				<img className="logo" src={Logo} alt="Orange" />
				<ul>
					<ol>
						<span className={this.selectedFood(this.props)}>
							<Link to="/food">Food</Link>
						</span>
					</ol>
					<ol>
						<span className={this.selectedPeople(this.props)}>
							<Link to="/people">People</Link>
						</span>
					</ol>
					<ol>
						<span className={this.selectedPlaces(this.props)}>
							<Link to="/places">Places</Link>
						</span>
					</ol>
				</ul>
			</div>
		);
	}
}
