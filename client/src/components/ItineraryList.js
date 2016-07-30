import React from 'react';
import { ItineraryListEntryView } from './ItineraryListEntryView';
import { HomeNav } from './Nav';
import { Link } from 'react-router';
import {Glyphicon} from 'react-bootstrap';

var footer = {
  'position': 'absolute',
  'height': '100px',
  'right': '0',
  'bottom': '0',
  'left': '0',
  'background-color': '#0898A1',
  'text-align': 'center'
}

var newItinerary = {
	'color': 'white',
	'font': '2em "Open Sans", sans-serif',
	'position': 'relative',
	'top': '15px'
}

var itineraryContainer = {
  'height': '530',
  'display': 'flex',
  'flex-direction': 'column'
}

var plusGlyph = {
	'font-size': '10em',
	'color': '#EB7D6C',
	'display':'block',
	'text-align':'center'
}

class ItineraryList extends React.Component {

	constructor (props) {
    super(props);
    console.log('first set of props', props.route.changeRoom)
  };

  // get list of chat rooms for that user
  getChatRooms() {
    this.props.route.mainSocket.emit('get chatrooms', {username: 'cookieMonster'})
  }

	
	render () {
		return (
			<div>
		    <HomeNav header={'Itinerary List'}/>
				<div style={itineraryContainer}>
				{this.props.route.itineraryList.map((itinerary) => (
					<ItineraryListEntryView changeRoom={this.props.route.changeRoom} itinerary={ itinerary } />
				))}
				</div>
				<div>
					<Link to={'/additinerary'}>
						<Glyphicon style={plusGlyph} glyph="plus-sign"/>
					</Link>
				</div>
			</div>
		);	
	}
}

export {ItineraryList};

