import React, { Component } from 'react';
import { getAllImages } from '../../services/api';
import Image from "../Image"
import './styles.css';

export default class ImageGrid extends Component {
	constructor(props) {
		super(props);
		this.state = { list: [] };
	}


	loadImages(from) {
		getAllImages(from).then((data) => this.setState({ list: data.results, loaded: true }));
	}

	render() {
		this.loadImages(this.props.from);
		return (
			<div className="page">
				<p className="description">{this.props.text}</p>
				<hr  />
				<div className="gallery">
					{this.state.list.map((item, i) => {
						return (
							<Image key={i} name={item.name} link={item.link} />	
						);
					})}
				</div>
			</div>
		);
	}
}
