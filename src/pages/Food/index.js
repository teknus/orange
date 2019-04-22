import React, { Component } from 'react';
import NavBar from '../../components/NavBar';
import ImageGrid from "../../components/ImageGrid"

export default class Food extends Component {

	render() {
		return (
			<>
				<NavBar />
				<h1>Food</h1>
				<ImageGrid from="Food"/>
			</>
		);
	}
}
