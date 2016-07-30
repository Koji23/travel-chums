import React from 'react';
import ReactDOM from 'react-dom';
import { HomeNav } from './Nav';
import {Glyphicon} from 'react-bootstrap';
import {Link} from 'react-router';

var input1 = {
	'border': '1px solid black',
	'border-radius': '10px',
	'left': '40px',
	'width': '320px',
	'height': '40px',
	'top': '150px',
	'margin-bottom': '20px',
	'margin-left': '40px',
	'margin-top': '20px'
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
		let itineraryData = 
			ReactDOM.findDOMNode(this.refs.date).value.toUpperCase()
			+ '_' + ReactDOM.findDOMNode(this.refs.startCity).value.toUpperCase()
			+ '_to_' + ReactDOM.findDOMNode(this.refs.endCity).value.toUpperCase();
		this.props.route.mainSocket.emit('send itinerary', {itinerary: itineraryData, username: this.props.route.username});
	}

	render () {
		return (
			<div>
		    <HomeNav header={'Add New Itinerary'}/>
		    <h1>where are you?</h1>
				<textarea ref="startCity" style={input1}/>
				<h1>where are you going?</h1>
				<Glyphicon glyph="retweet"/>
				<textarea ref="endCity" style={input1}/>
				<h1>when are you leaving?</h1>
				<textarea ref="date" style={input1}/>
					<div style={footer} onClick={(event) => this.sendItinerary(event)}>

						<div style={newItinerary}>+ submit new itinerary</div>
						
					</div>
			</div>
			
		);
	}
}

export {AddItinerary};

			// <input type="date" style={input1}/>
