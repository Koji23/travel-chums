import React from 'react';
import ReactDOM from 'react-dom';
import { HomeNav } from './Nav';

var input1 = {
	'border': '1px solid black',
	'border-radius': '10px',
	'left': '40px',
	'width': '320px',
	'height': '40px',
	'top': '150px',
	'margin-bottom': '70px',
	'margin-left': '40px',
	'margin-top': '60px'
}

var footer = {
  'position': 'absolute',
  'height': '100px',
  'right': '0',
  'bottom': '0',
  'left': '0',
  'padding': '1rem',
  'background-color': '#5d5d5d',
  'text-align': 'center'
}

var newItinerary = {
	'color': 'white',
	'font': '2em "Open Sans", sans-serif',
	'position': 'relative',
	'top': '15px'
}

// addItinerary (event) {
// 	event.preventDefault();
// }

class AddItinerary extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			itinerary: ''
		}
	}

	sendItinerary (event) {
		event.preventDefault();
		let itineraryData = {
			itinerary: ReactDOM.findDOMNode(this.refs.message).value
		}
	}

	render () {
		return (
			<div>test</div>
		);
	}
}

export {AddItinerary};

			// <div>
		 //    <HomeNav/>
			// 	<textarea ref="startCity" style={input1}/>
			// 	<textarea ref="endCity" style={input1}/>		
			// 	<textarea ref= style={input1}/>
			// 	<div style={footer} onClick={(event) => this.sendItinerary(event)}>
			// 		<div style={newItinerary}>+ submit new itinerary</div>
			// 	</div>
			// </div>