import React from 'react';
import { ItineraryListEntryView } from './ItineraryListEntryView';
<<<<<<< HEAD
import { HomeNav } from './Nav';

=======
>>>>>>> 3bb40b61959064c8e32f963758f77f862caaef71

var footer = {
  'position': 'absolute',
  'height': '100px',
  'right': '0',
  'bottom': '0',
  'left': '0',
<<<<<<< HEAD
=======
  'padding': '1rem',
>>>>>>> 3bb40b61959064c8e32f963758f77f862caaef71
  'background-color': '#5d5d5d',
  'text-align': 'center'
}

var newItinerary = {
	'color': 'white',
	'font': '2em "Open Sans", sans-serif',
	'position': 'relative',
	'top': '15px'
}

<<<<<<< HEAD
var itineraryContainer = {
  'height': '530',
  'display': 'flex',
  'flex-direction': 'column'
}

export const ItineraryList = (props) => (
	<div>
    <HomeNav/>
		<div style={itineraryContainer}>
		{props.route.itineraryList.map((itinerary) => (
			<ItineraryListEntryView itinerary={ itinerary } />
		))}
		</div>
		<div style={footer} >
			<div style={newItinerary} >+ add new itinerary</div>
		</div>
	</div>
)
=======


export const ItineraryList = (props) => (
	<div>
		<div>
		{props.itineraryList.map((itinerary) => (
			<ItineraryListEntryView itinerary={ itinerary } />
		))}
		</div>
		<div style={footer}>
			<div style={newItinerary}>+ add new itinerary</div>
		</div>
	</div>
)
>>>>>>> 3bb40b61959064c8e32f963758f77f862caaef71
