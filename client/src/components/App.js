import React from 'react';
import { Authentication } from './Authentication';
// import { Authenticated } from './Authenticated';
import { ItineraryList } from './ItineraryList';
import { GroupChatRoom } from './ChatRoom'; 
import { AddItinerary } from './AddItinerary';
import {Router, Route, IndexRoute, Link, hashHistory, browserHistory, Redirect} from 'react-router';

import { Nav } from './Nav';

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      pageToRender: 'addItinerary',
      messages: null,
      location: '37.7837-122.4090',
      userLoggedIn: window.location.search.split(/[=&]/)[1] || false,
      username: window.location.search.split(/[=&]/)[3].split('%20').join(' ') || 'anonymous',
      userphoto: window.location.search.split('photo=')[1] || 'http://i.imgur.com/2muFGLB.jpg',
      itineraryList: ['2016-06-01_madrid_to_barcelona','2016-08-27_sanfrancisco_to_losangeles', '2016-09-30_prague_to_berlin'],
      room: 'none',
      header: 'Itinerary List',
      leftButton: ''
    };
    // console.log(">>>>>>>>>>>>>>>>>>>>", this.state);
  }

  componentDidMount() {
    this.addMessageToChatRoom = this.addMessageToChatRoom.bind(this);
    this.createChatRoom = this.createChatRoom.bind(this);
    this.logOutUser = this.logOutUser.bind(this);
    this.changePageToRender = this.changePageToRender.bind(this);
    // this.changeRoom = this.changeRoom.bind(this);

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

    this.props.mainSocket.on('send rooms to front end', (rooms) => {
      this.setState({
        itineraryList: rooms
      })
      console.log('new state for itinerary list:', this.state.itineraryList)
    })

    this.props.mainSocket.on('update user', (data) => {
      console.log("UPDATING USER!", data);
      // this.setState({
      //   username: '',
      //   userphoto: ''
      // });

    });

    this.updateLocationState();
  }


  //will continulally update our location state with our new position returned form navigator.geolocation and check if we are in chat room
  setPosition(position) {
    var crd = position.coords;

    console.log('Your current position is:');
    console.log('Latitude : ' + crd.latitude);
    console.log('Longitude: ' + crd.longitude);
    console.log('More or less ' + crd.accuracy + ' meters.');
    // const latRound = position.coords.latitude.toFixed(3);
    // const lonRound = position.coords.longitude.toFixed(3);
    // const location = latRound.toString() + lonRound.toString();
    // this.setState({
    //   location,
    // });
    // this.updateMessagesState();
  }

  //will watch our location and frequently call set position
  updateLocationState() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setPosition.bind(this), this.error, options);
    } else {
      console.log('geolocation not supported');
    }
  }

  error (err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
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

  requireAuth (nextState, replace) {
    if (!this.state.userLoggedIn) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
      })
    }
  }

  changeRoom (newRoom) {
    console.log('the new room should be', newRoom)
    this.setState({
      room: newRoom
    });
     console.log('the new room is now', this.state.room);

  }

  render() {

    return (
      <div>
        <Router history={browserHistory}>
          <Route path="/"  
            onEnter={this.requireAuth.bind(this)}
            component={ItineraryList} 
            itineraryList={this.state.itineraryList}
            username={this.state.username}
            changeRoom={this.changeRoom.bind(this)}
            mainSocket={this.props.mainSocket}></Route>
          <Route path="additinerary" 
            onEnter={this.requireAuth.bind(this)} 
            component={AddItinerary}
            mainSocket={this.props.mainSocket} 
            username={this.state.username}></Route>
          <Route path="groupchatroom" 
            onEnter={this.requireAuth.bind(this)} 
            component={GroupChatRoom} 
            mainSocket={this.props.mainSocket}
            header={this.state.room} 
            username={this.state.username}
            room={this.state.room}
            userphoto={this.state.userphoto}></Route>
          <Route path="login" 
            component={Authentication} 
            mainSocket={this.props.mainSocket}></Route>
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