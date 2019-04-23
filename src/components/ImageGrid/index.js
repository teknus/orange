import React, { Component } from 'react';
import {getAllImages} from "../../services/api"

export default class ImageGrid extends Component {
	constructor(props) {
		super(props);
		this.state = {list: []};
	}

	loadImages(from){
		getAllImages(from)
		.then(data =>this.setState({list:data.results,loaded:true}))	
	}
	

	render() {
		this.loadImages(this.props.from);
		return (
            <>
                {this.state.list.map(
					(item, i) => {
						return <div key={i}>
							<img src={item.link} alt={item.name}/>
						</div>
					}
				)}
			</>
		);
	}
}
