import React from 'react';
import { ItineraryListEntryView } from './ItineraryListEntryView';
import { HomeNav } from './Nav';
import { Link } from 'react-router';

var footer = {
  'position': 'absolute',
  'height': '100px',
  'right': '0',
  'bottom': '0',
  'left': '0',
  'background-color': '#5d5d5d',
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

class ItineraryList extends React.Component {

	constructor (props) {
    super(props);
    this.state = {
    	rooms: '',
    }
  };

  componentDidMount() {
    this.props.mainSocket.on('send rooms to front end', (rooms) => {
      this.setState({
        itineraryList: rooms
      })
      // console.log('new state for itinerary list:', this.state.itineraryList)
    })
  }

  // get list of chat rooms for that user
  getChatRooms() {
    this.props.route.mainSocket.emit('get chatrooms', {username: 'cookieMonster'})
  }



	
	render () {
    this.getChatRooms();
		return (
			<div>
		    <HomeNav header={'Itinerary List'}/>
				<div style={itineraryContainer}>
				{this.props.route.itineraryList.map((itinerary) => (
					<ItineraryListEntryView changeRoom={this.props.route.changeRoom} itinerary={ itinerary } />
				))}
				</div>
				<Link to={'/additinerary'}>
					<div style={footer} >
						<div style={newItinerary} >+ add new itinerary</div>
					</div>
				</Link>
			</div>
		);	
	}
}

export {ItineraryList};

