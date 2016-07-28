import React from 'react';
import { AddMessage } from './AddMessage';
import { MessageList } from './MessageList';

class GroupChatRoom extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <div>
        <h1>GroupChatRoom</h1>
        <MessageList messages={[{username: 'anon', messages: 'Welcome', createdAt:''}]}/>
      </div>
    );
  }
}

export {GroupChatRoom};