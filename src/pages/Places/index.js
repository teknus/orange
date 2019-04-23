import React, { Component } from 'react';
import NavBar from '../../components/NavBar';
import ImageGrid from "../../components/ImageGrid"

export default class Places extends Component {
	render() {
		return (
			<>
				<NavBar from="places"/>
				<ImageGrid from="Place" text="LIST OF PLACES"/>
			</>
		);
	}
}
