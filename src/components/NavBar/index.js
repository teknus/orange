import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import './styles.css';
export default class NavBar extends Component {
	render() {
		return (
			<div className="navbar">
				<img src={Logo} alt="Orange" />
				<ul>
					<ol>
						<Link to="/food">Food</Link>
					</ol>
					<ol>
						<Link to="/people">People</Link>
					</ol>
					<ol>
						<Link to="/places">Places</Link>
					</ol>
				</ul>
			</div>
		);
	}
}
