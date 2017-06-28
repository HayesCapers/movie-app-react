import React, { Component } from 'react';
import './Poster.css'

class Poster extends Component {

	render(){
		// console.log(this.props);
		var imagePath = `http://image.tmdb.org/t/p/w300${this.props.poster.poster_path}`;
		// console.log(imagePath);
		return(
			<div className='col-sm-3 poster-wrapper'>
				<img src={imagePath} />
			</div>
		)
	}
}

export default Poster