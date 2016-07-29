import React from 'react';
import { Authentication } from './Authentication';
// import { Authenticated } from './Authenticated';
import { ItineraryList } from './ItineraryList';
import { GroupChatRoom } from './ChatRoom'; 
import { AddItinerary } from './AddItinerary';
import {Router, Route, IndexRoute, Link, hashHistory, browserHistory, Redirect} from 'react-router';

import { Nav } from './Nav';


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {  
      pageToRender: 'addItinerary',
      messages: null,
      location: '37.7837-122.4090',
      userLoggedIn: true,
      username: 'ronaldMcDonald',
      itineraryList: ['2016-06-01_madrid_to_barcelona','2016-08-27_sanfrancisco_to_losangeles', '2016-09-30_prague_to_berlin'],
      room: 'JTs Fun Emporium',
      header: 'Itinerary List',
      leftButton: ''
    };
  }

  componentDidMount() {
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

<<<<<<< HEAD
  setLeftButton (buttonValue) {
    this.setState({
      leftButton: buttonValue
    });
  }

  requireAuth (nextState, replace) {
    if (!this.state.userLoggedIn) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
      })
    }
  }

  render() {

    return (
      <div>
        <Router history={browserHistory}>
          <Route path="/"  onEnter={this.requireAuth.bind(this)} component={ItineraryList} itineraryList={this.state.itineraryList} ></Route>
          <Route path="additinerary" onEnter={this.requireAuth.bind(this)}  component={AddItinerary}></Route>
          <Route path="groupchatroom" onEnter={this.requireAuth.bind(this)}  component={GroupChatRoom} mainSocket={this.props.mainSocket} username={this.state.username}></Route>
          <Route path="login" component={Authentication} mainSocket={this.props.mainSocket}/>
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