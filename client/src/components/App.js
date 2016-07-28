import React from 'react';
import { Authentication } from './Authentication';
// import { Authenticated } from './Authenticated';
import { ItineraryList } from './ItineraryList';
import { GroupChatRoom } from './ChatRoom'; 
import { AddItinerary } from './AddItinerary';
import {Router, Route, IndexRoute, Link, hashHistory, browserHistory} from 'react-router';

const About = (props) => {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
}

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {  
      pageToRender: 'itineraryList',
      messages: null,
      location: '37.7837-122.4090',
      userLoggedIn: true,
      username: 'anonymous',
      itineraryList: ['2016-06-01_madrid_to_barcelona','2016-08-27_sanfrancisco_to_losangeles', '2016-09-30_prague_to_berlin'],
      currentRoom: '',
      header: 'Itinerary List',
      leftButton: ''
    };
  }

  componentWillMount() {
    this.addMessageToChatRoom = this.addMessageToChatRoom.bind(this);
    this.createChatRoom = this.createChatRoom.bind(this);
    this.logOutUser = this.logOutUser.bind(this);
    this.changePageToRender = this.changePageToRender.bind(this);
    this.setLeftButton = this.setLeftButton.bind(this);

    //listens for a messages update from the main server
    this.props.mainSocket.on('updateMessagesState', (location) => {
      const messages = location ? location.messages : null;
      this.setState({
        messages,
      });
    });

    this.props.mainSocket.on('Authentication', (user) => {
      this.setState({
        userLoggedIn: true,
      });
    });
  }

  //will continulally update our location state with our new position returned form navigator.geolocation and check if we are in chat room
  setPosition(position) {
    const latRound = position.coords.latitude.toFixed(3);
    const lonRound = position.coords.longitude.toFixed(3);
    const location = latRound.toString() + lonRound.toString();
    this.setState({
      location,
    });
    this.updateMessagesState();
  }

  //will watch our location and frequently call set position
  updateLocationState() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setPosition.bind(this), this.error);
    } else {
      console.log('geolocation not supported');
    }
  }

  //socket request to the main server to update messages state based on location state
  updateMessagesState() {
    this.props.mainSocket.emit('updateMessagesState', this.state.location);
  }

  //socket request to the main server to create a new chatroom
  createChatRoom() {
    this.props.mainSocket.emit('createChatRoom', this.state.location);
  }

  //socket request to chatroom to append a new message to
  addMessageToChatRoom(message) {
    this.props.mainSocket.emit('addMessageToChatRoom', { location: this.state.location, message, username: this.state.userLoggedIn });
  }

  logOutUser() {
    this.setState({
      userLoggedIn: true,
    });
  }

  changePageToRender (pageToRender) {
    this.setState({
      pageToRender: pageToRender
    });
  }

  setLeftButton (buttonValue) {
    this.setState({
      leftButton: buttonValue
    });
  }

  render() {
    
    return (
      <div>
        <Router history={browserHistory}>
          <Route path="/" component={ItineraryList} itineraryList={this.state.itineraryList}></Route>
          <Route path="additinerary" component={AddItinerary}></Route>
          <Route path="groupchatroom" component={GroupChatRoom} mainSocket={this.props.mainSocket} username={this.state.username}></Route>
        </Router>
      </div>

    );
  }
}



// <Authenticated
//   messages={this.state.messages}
//   userLoggedIn={this.state.userLoggedIn}
//   addMessageToChatRoom={this.addMessageToChatRoom}
//   createChatRoom={this.createChatRoom}
//   logOutUser={this.logOutUser}
// />