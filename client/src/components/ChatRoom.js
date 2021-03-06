 /* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
import { AddMessage } from './AddMessage';
import { MessageList } from './MessageList';
import { HomeNav } from './Nav';

import _ from 'lodash';

class GroupChatRoom extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      typingStatus: false,
      messages: [],
      roomname: 'playhouse',
      userIsEnroute: false
    }
    this.debouncedDisableTypingStatus = _.debounce(this.disableTypingStatus, 1000);
  }

  componentDidMount () {
    this.props.route.mainSocket.on('typing status', (bool) => {
      this.enableTypingStatus();
      this.debouncedDisableTypingStatus();
    }); 

    this.props.route.mainSocket.on('get messages for room', (messages) => {
      this.setState({
        messages: messages
      });
    });    
    this.getMessages();
  }

  sendMessage (event) {
    event.preventDefault();
    let messageData = {
      username: this.props.route.username,
      message: ReactDOM.findDOMNode(this.refs.message).value,
      room: this.props.params.name,
      photo: ReactDOM.findDOMNode(this.refs.photo).src
    }
    console.log('message being sent!!!!!!!!!!')
    this.props.route.mainSocket.emit('send message', messageData, this.props.params.name);
  }

  sendTypingStatus () {
    this.props.route.mainSocket.emit('send typing status', true);
  }

  enableTypingStatus () {
    this.setState({
      typingStatus: true
    });
  }
  
  disableTypingStatus () {
    this.setState({
      typingStatus: false
    });
  }

  getMessages () {
    this.props.route.mainSocket.emit('get messages for room', this.props.params.name);
  }

  render () {
    let typingStatus = this.state.typingStatus ? <div style={{color:'white'}}>Is Typing...</div> : <div></div>;
    return (
      <div>
        <HomeNav header={this.props.params.name.split('_')[0]} leftButton={'Home'}/>
        <h3 style={{color:'white'}}>{this.props.params.name.split('_').slice(1).join(' ').toUpperCase()}</h3>

        <MessageList username={this.props.route.username} messages={this.state.messages} />
        {typingStatus}
        <form>
          <fieldset className="submitMessage">
            <img ref="photo" src={this.props.route.userphoto}  className="userPhoto"/>
            <legend style={{color:'white'}}>Send:</legend>
            <textarea ref='message' onChange={() => {this.sendTypingStatus()}}/><br/>
            <input onClick={(event) => this.sendMessage(event)} type="submit" value="Submit" style={{color:'white'}} />
          </fieldset>
        </form>
      </div>
    );
  }
}

export {GroupChatRoom};