import React, { Component } from 'react';
import NavBar from '../../components/NavBar';
import ImageGrid from "../../components/ImageGrid"

export default class People extends Component {

	render() {
		return (
			<>
				<NavBar from="people"/>
				<ImageGrid from="People" text="LIST OF PEOPLE"/>
			</>
		);
	}
}
