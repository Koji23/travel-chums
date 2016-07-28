import React from 'react';
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

export const AddItinerary = (props) => (
	<div>
    <HomeNav/>
		<input placeholder="where are you?" style={input1}></input>
		<input placeholder="where are you going?" style={input1}></input>		
		<input placeholder="when are you going?" style={input1}></input>		
		<div style={footer}>
			<div style={newItinerary}>+ submit new itinerary</div>
		</div>
	</div>
)