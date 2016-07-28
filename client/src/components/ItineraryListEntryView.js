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
  'margin': '2px',
  'display': 'flex',
  'align-items': 'center',
  'justify-content': 'flex-start',

}

var itineraryDate = {
  'font': '1.8em "Open Sans", sans-serif',
  'color': '#229bd7',
  'width': '100px',
  'margin-left': '10px'
}

var itineraryDetails = {
  'font': '1.7em "Open Sans", sans-serif',
  'color': 'white',
  'text-align': 'left',
  'overflow': 'hidden',
  'text-overflow': 'ellipses'
}




export const ItineraryListEntryView = (props) => (
    <div style={itineraryItem}>
  		<span style={itineraryDate}>
  			{ props.itinerary.split('_').slice(0, 1) }
  		</span>
  		<span style={itineraryDetails}>
  			{ props.itinerary.replace('_to_', ' to ').split('_').slice(1) }
  		</span>
  	</div>
)
