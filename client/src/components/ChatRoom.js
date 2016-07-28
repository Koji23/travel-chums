import React from 'react';
import ReactDOM from 'react-dom';
import { AddMessage } from './AddMessage';
import { MessageList } from './MessageList';

class GroupChatRoom extends React.Component {
  constructor (props) {
    super(props);
    // console.log(this.props.username)
  }

  sendMessage (event) {
    event.preventDefault(); 
    let messageData = {
      username: this.props.username,
      message: ReactDOM.findDOMNode(this.refs.message).value,
      room: '',
      createAt: new Date()
    }
    console.log(this.props.mainSocket);
    this.props.mainSocket.emit('send message', messageData);
  }

  render () {
    return (
      <div>
        <h1>GroupChatRoom</h1>
        <MessageList username={this.props.username} messages={[{username: 'admin', messages: 'Welcome', createdAt:'', id:'1'},{username: 'anonymous', messages: 'hello', createdAt:'', id:'2'}]} />
        <form>
          <fieldset>
            <legend>Send:</legend>
            <textarea ref='message'/><br/>
            <input onClick={(event) => this.sendMessage(event)} type="submit" value="Submit" />
          </fieldset>
        </form>
      </div>
    );
  }
}

export {GroupChatRoom};