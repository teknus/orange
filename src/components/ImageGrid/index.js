import React, { Component } from 'react';
import { getAllImages } from '../../services/api';
import Image from "../Image"
import './styles.css';

export default class ImageGrid extends Component {
	constructor(props) {
		super(props);
		this.state = { list: [] };
	}

	componentWillMount(){
		getAllImages(this.props.from).then((data) => this.setState({ list: data.results.sort(function() {
			return .5 - Math.random();
		  }), loaded: true }));
	}

	render() {
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
