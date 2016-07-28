import React from 'react';
import { Panel, ListGroup } from 'react-bootstrap';
import { MessageListEntry } from './MessageListEntry';


export const MessageList = (props) => (
  <div style={{border: '1px solid black',fontWeight: 'bold'}} >
    <ul fill>
      {props.messages.map((message, index) => {
        if(message.username === props.username) {
          return <MessageListEntry message={message} key={index} isUser={true}/>;     
        } else {
          return <MessageListEntry message={message} key={index} isUser={false}/>;   
        }
      })}
    </ul>
  </div>
);


