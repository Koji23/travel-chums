import React from 'react';
import ReactDOM from 'react-dom';
import { AddMessage } from './AddMessage';
import { MessageList } from './MessageList';
import _ from 'lodash';

class GroupChatRoom extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      typingStatus: false
    }
    this.debouncedDisableTypingStatus = _.debounce(this.disableTypingStatus, 1000);
  }

  componentDidMount () {
    this.props.mainSocket.on('typing status', (bool) => {
      this.enableTypingStatus();
      this.debouncedDisableTypingStatus()
    }); 
    
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

  sendTypingStatus () {
    this.props.mainSocket.emit('send typing status', true);
  }

  enableTypingStatus () {
    this.setState({
      typingStatus: true
    });
    console.log('toggle ', true);
  }
  
  disableTypingStatus () {
    this.setState({
      typingStatus: false
    });
    console.log('toggle ', false);
  }

  render () {
    let typingStatus = this.state.typingStatus ? <div>Is Typing...</div> : <div></div>;
    return (
      <div>
        <h1>GroupChatRoom</h1>
        <MessageList username={this.props.username} messages={[{username: 'admin', messages: 'Welcome', createdAt:'', id:'1'},{username: 'anonymous', messages: 'hello', createdAt:'', id:'2'}]} />
        {typingStatus}
        <form>
          <fieldset>
            <legend>Send:</legend>
            <textarea ref='message' onChange={() => {this.sendTypingStatus()}}/><br/>
            <input onClick={(event) => this.sendMessage(event)} type="submit" value="Submit" />
          </fieldset>
        </form>
      </div>
    );
  }
}

export {GroupChatRoom};