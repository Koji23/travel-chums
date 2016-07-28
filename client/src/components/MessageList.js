import React from 'react';
import { Panel, ListGroup } from 'react-bootstrap';
import { MessageListEntry } from './MessageListEntry';

export const MessageList = (props) => (
  <div style={{ fontWeight: 'bold' }} >
    <ul fill>
      {props.messages.map((message, index) => (
        <MessageListEntry message={message} key={index}/>)
      )}
    </ul>
  </div>
);
