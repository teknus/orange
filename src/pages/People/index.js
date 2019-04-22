import React, { Component } from 'react';
import NavBar from '../../components/NavBar';
import ImageGrid from "../../components/ImageGrid"

export default class People extends Component {

	render() {
		return (
			<>
				<NavBar />
				<h1>People</h1>
				<ImageGrid from="Person"/>
			</>
		);
	}
}
