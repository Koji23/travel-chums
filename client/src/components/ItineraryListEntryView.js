import React from 'react';
import Moment from 'moment';

import RaisedButton from 'material-ui/RaisedButton';


var itineraryItem = {
	'height': '80px',
	'position': 'relative',
  'border-bottom-width': '1px',
  'border-bottom-style': 'solid',
  'background-color': 'rgba(255, 255, 255, 0.22)',
  'border-radius': '7px',
  'margin': '5px'
}

var itineraryDetails = {
  'font': '1.7em "Open Sans", sans-serif',
  'color': 'white',
  'display': 'in-line',
  'position': 'relative',
  'left': '15px',
  'top': '12px'
}

var itineraryDate = {
	'font': '1.7em "Open Sans", sans-serif',
  'color': '#229bd7',
  'display': 'in-line',
  'position': 'relative',
  'left': '15px',
  'top': '12px'
}


export const ItineraryListEntryView = (props) => (
	<div style={itineraryItem}>
		<div style={itineraryDate}>
			{ props.itinerary.split('_').slice(0, 1) }
		</div>
		<div style={itineraryDetails}>
			{ props.itinerary.replace('_to_', ' to ').split('_').slice(1) }
		</div>
	</div>
)
