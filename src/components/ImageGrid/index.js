import React, { Component } from 'react';
import Image from '../Image';
import './styles.css';
import { ApplicationId, MasterKey, Url } from '../../configs/configs';
import Parse from 'parse';

Parse.initialize(ApplicationId, '', MasterKey);
Parse.serverURL = Url;

export default class ImageGrid extends Component {
	constructor(props) {
		super(props);
		this.state = { list: [] };
	}

	componentWillMount() {
		//catch errors not implemented
		Parse.Cloud.run(`getAll${this.props.from}`).then((response) => {
			var resp = response.map((item, i) => {
				return item.attributes;
			});
			this.setState({list:resp});
		});
	}

	render() {
		return (
			<div className="page">
				<p className="description">{this.props.text}</p>
				<hr />
				<div className="gallery">
					{this.state.list.map((item, i) => {
						return <Image key={i} name={item.name} link={item.link} />;
					})}
				</div>
			</div>
		);
	}
}
