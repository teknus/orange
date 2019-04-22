import React, { Component } from 'react';
import {getAllImages} from "../../services/api"

export default class ImageGrid extends Component {
	constructor(props) {
		super(props);
		this.state = {list: [], loaded: false};
	}

	loadImages(from){
		if(!this.state.loaded){
			getAllImages(from)
			.then(response => response.json())
			.then(data => data.results)
			.then( list => {
				var parsed = [];
				for (var counter in  list) {
					parsed.push({"name": list[counter].name,"link": list[counter].link, "id": list[counter].objectId});
				}
				this.setState({list:parsed,loaded:true});
			});
			
		}
		var response = [];
		for(var item in this.state.list){
			response.push(
				<div key={this.state.list[item].id}><img src={this.state.list[item].link} alt={this.state.list[item].name}/></div>
			);
		}
		return response;
	}
	


	render() {
		return (
            <>
                {this.loadImages(this.props.from)}
			</>
		);
	}
}
