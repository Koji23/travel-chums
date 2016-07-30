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
  'height': '470',
  'display': 'flex',
  'flex-direction': 'column',
	'overflow': 'scroll'
}

var plusGlyph = {
	'font-size': '10em',
	'color': 'orange',
	'display':'block',
	'text-align':'center'
}


class ItineraryList extends React.Component {

	constructor (props) {
    super(props);
    this.state = {
    	rooms: []
    }
  };

  componentDidMount() {
    this.props.route.mainSocket.on('send rooms to front end', (rooms) => {
      this.setState({
        rooms: rooms
      });
    });

    this.getChatRooms();
  }

  // get list of chat rooms for that user
  getChatRooms() {
    this.props.route.mainSocket.emit('get chatrooms', {username: this.props.route.username})
  };



	
	render () {
		return (
			<div>
		    <HomeNav header={'Itinerary List'}/>
				<div style={itineraryContainer}>

					{this.state.rooms.map((itinerary) => (
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
