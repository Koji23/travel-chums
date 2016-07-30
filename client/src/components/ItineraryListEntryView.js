import React from 'react';
import Moment from 'moment';
import { Link } from 'react-router';
import {Glyphicon} from 'react-bootstrap';


import RaisedButton from 'material-ui/RaisedButton';

var itineraryItem = {
  'height': '100px',
  'position': 'relative',
  'display': 'flex',
  'align-items': 'center',
  'justify-content': 'flex-start',
  'background-color': 'white',
  'margin-bottom': '10px',
  'width': '95%',
  'margin-left': '2.5%'
}

var itineraryDate = {
  'font': '1.8em "Open Sans", sans-serif',
  'color': '#229bd7',
  'width': '100px',
  'margin-left': '10px'
}

var itineraryDetails = {
  'font': '1.7em "Open Sans", sans-serif',
  'color': 'rgb(58, 58, 58)',
  'text-align': 'left',
  'overflow': 'hidden',
  'text-overflow': 'ellipses'
}

var hamburger = {
  'float': 'right'
}

var dateBlock = {
  'background-color': 'rgba(183, 183, 183, 0.14)',
  'height': '100px',
  'width': '100px'
}


// export const ItineraryListEntryView = (props) => (
//     <div style={itineraryItem}>
//       <span style={itineraryDate}>
//         { props.itinerary.split('_').slice(0, 1) }
//       </span>
//       <span style={itineraryDetails}>
//         { props.itinerary.replace('_to_', ' to ').split('_').slice(1) }
//       </span>
//     </div>
// )


class ItineraryListEntryView extends React.Component {
  
  constructor (props) {
    super(props);
    state: {
      
    }
  };


  render () {
    return (
      <Link to={`groupchatroom/${this.props.itinerary}`} onClick={(event) => this.props.changeRoom(this.props.itinerary)}>
        <div style={itineraryItem}>
        <div style = {dateBlock}>
          <span style={itineraryDate}>
            { this.props.itinerary.split('_').slice(0, 1) }
          </span>
        </div>
          <span style={itineraryDetails}>
            { this.props.itinerary.replace('_to_', ' to ').split('_').slice(1) }
          </span>
        </div>
      </Link>
    );
  }
}

export {ItineraryListEntryView};

